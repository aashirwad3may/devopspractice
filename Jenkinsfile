pipeline {
    agent any
    environment {
        PROJECT_ID = 'river-treat-336806'
        CLUSTER_NAME = 'k8s-cluster'
        LOCATION = 'us-central1-c'
        CREDENTIALS_ID = 'kubernetes'
    }
    stages {
        stage("Checkout code") {
            steps {
                checkout scm
            }
        }
        stage("Build image") {
            steps {
                script {
                    myapp = docker.build("<Your DockerHub Username>/devops_practice:${env.BUILD_ID}")
                }
            }
        }
        stage('Test') {
		    steps {
			    echo "Testing..."
		    }
	    }
        stage("Push image") {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub') {
                            myapp.push("latest")
                            myapp.push("${env.BUILD_ID}")
                    }
                }
            }
        }
        /*        
        stage('Deploy to GKE') {
            steps{
                sh "sed -i 's/devops_practice:latest/devops_practice:${env.BUILD_ID}/g' deployement.yaml"
                step([$class: 'KubernetesEngineBuilder', projectId: env.PROJECT_ID, clusterName: env.CLUSTER_NAME, location: env.LOCATION, manifestPattern: 'deployement.yaml', credentialsId: env.CREDENTIALS_ID, verifyDeployments: true])
            }
        }
        */
    }    
}
