import { beforeEach, describe, expect, it} from 'vitest'
import { InMemoryRedisRepository } from '@/repositories/in-memory-redis-repository'
import { AcessInviteLinkUseCase } from './acess-invite-link-use-case'
import { redis } from '@/lib/redis'

describe ('Acess Invite Link Test', () => {

    let redisRepository: InMemoryRedisRepository
    let sut:AcessInviteLinkUseCase
    
    beforeEach(() => {
        redisRepository = new InMemoryRedisRepository()
        sut = new AcessInviteLinkUseCase()
    })

    it('should be able to send a invite', async () => {


        // await sut.execute({
        //     hash: 'acess-invite-link', 
        //     field:'user-1', 
        //     increment: 1
        // })

        await sut.execute({
            hash: 'acess-invite-link', 
            field:'user-1', 
            increment: 1
        })

        console.log(await redis.hgetall('acess-invite-link'))
        console.log(await redisRepository.hgetall('acess-invite-link'))
        
        // expect(hashes['field']).toEqual('user-1')


    })
})
