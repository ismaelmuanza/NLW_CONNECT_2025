import { redis } from "@/lib/redis";
import { HIncrby, InMemoryRedisRepositoryInterface } from "@/repositories/interface/in-memory-redis-repository-interface";


export class AcessInviteLinkUseCase {

    // constructor (private redisRepository: InMemoryRedisRepositoryInterface) {}

    async execute (data: HIncrby) {

        // const referer = await this.redisRepository.hincrby({
        //     hash: data.hash,
        //     field: data.field,
        //     increment: data.increment
        // })

        const referer = await redis.hincrby(
            data.hash,
            data.field,
            data.increment
        )

        return {referer}
    }
}