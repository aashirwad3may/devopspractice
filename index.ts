import express from 'express'
import figlet from 'figlet'
import colors from 'colors'

import devRouter from './app/dev/devUtility.route.config'
const port = 3000

const app = express()

app.use('/v1/dev', devRouter)

app.set('port', port)

app.listen(port, () => {
  const banner = figlet.textSync('DEV_APP', { horizontalLayout: 'full' })
  console.log(colors.bgBlack(colors.rainbow(banner)))
  console.log(`Server started at port ${port}`.green)
})
