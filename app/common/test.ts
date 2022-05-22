import { RedisClientType } from '@redis/client/dist/lib/client'
import redisClient from './redisClient'

class Test {
    private _redisClient: RedisClientType<any>;

    constructor (
      redisClient: RedisClientType<any>
    ) {
      this._redisClient = redisClient
    }
}

const testService = new Test(redisClient)
export default testService
