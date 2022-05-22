import { createClient } from 'redis'
import { RedisClientType } from '@redis/client/dist/lib/client'

let redisClient: RedisClientType<any>;
(async () => {
  redisClient = createClient({
    socket: {
      host: '10.13.148.243',
      port: 6378,
      tls: true,
      cert: '-----BEGIN CERTIFICATE-----\nMIIDnTCCAoWgAwIBAgIBADANBgkqhkiG9w0BAQsFADCBhTEtMCsGA1UELhMkYTVh\nN2JlYTAtYWRmZi00YWM3LTkzNjItN2UxOWYzMGQyZTg4MTEwLwYDVQQDEyhHb29n\nbGUgQ2xvdWQgTWVtb3J5c3RvcmUgUmVkaXMgU2VydmVyIENBMRQwEgYDVQQKEwtH\nb29nbGUsIEluYzELMAkGA1UEBhMCVVMwHhcNMjIwNTIxMjAxMDE3WhcNMzIwNTE4\nMjAxMTE3WjCBhTEtMCsGA1UELhMkYTVhN2JlYTAtYWRmZi00YWM3LTkzNjItN2Ux\nOWYzMGQyZTg4MTEwLwYDVQQDEyhHb29nbGUgQ2xvdWQgTWVtb3J5c3RvcmUgUmVk\naXMgU2VydmVyIENBMRQwEgYDVQQKEwtHb29nbGUsIEluYzELMAkGA1UEBhMCVVMw\nggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCbtlS0bncvTBiGxGqJ4MUW\nbsDx1ZFcDqbiVShqAR+KuVgul78AOvRxiadC/K3PF21SvW65CUnmE27UAsvCdQO7\ng/3kjb2/iDMa2jvzW4t+2J8dPTVLHOqQey748Y54TI+0RHBLw1MXaqajUBy3Oqtj\nFVOff22mYB6ptI8OKvdlxQrAN5bDTX5HfhkysWVfx4L9B4UBUEZHujWIAS+E13SU\nb24Ug85PyrJDw2lh2D52pooD+o3AUahNXZqr1OWiBMmECGVDG6K4PWI+GI3ryJpR\n45dmveurWvj9k6MnsLsXeTtFLucvKiy6KhhYXeClL0mZpZob7FQaR6PBqfehYQHb\nAgMBAAGjFjAUMBIGA1UdEwEB/wQIMAYBAf8CAQAwDQYJKoZIhvcNAQELBQADggEB\nAI+cppSF2z/k0PD1GfRCU6RhiBV/hs8GakvszmGW34OgkdjLQ9tZYa+LZ0CbADHJ\nLBCG2VwsGnFE1ZPe0p0tIvIs2NWotwlChGbani/fc7c+QdQoZSMcABTFfAF4ZRPz\n8Rro41aftzGs4l9O0o9wpSoDb27LbhybsSxT3UCidKZU0CKGBFQIAJxzn5BrPMdw\nPrbsToxo0DhmjsSPLn40YgYgaNuwStdYmP/dycHLqHfqGxHOCFP8c3l9AIztniX7\nJozO5A7tljb/Y03ARKxycXYSpT37NQaVD2fKcvdQMNxIs2bw8U1KvBAQSEXyFI8v\nZRAOOraoaD9S62N970LXm18=\n-----END CERTIFICATE-----\n'.replace(/\\n/g, '\n')
    },
    password: process.env.REDIS_PASS
  })

  console.log('startting')
  redisClient.on('error', err => console.log('Redis Client Error', err))

  // The redis-mock library is old and does not contain this method, hence the hack
  await redisClient.connect()
  console.log('redis connection status::' + redisClient.isOpen)
})()

export default redisClient
