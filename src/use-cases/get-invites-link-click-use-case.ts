import { redis } from "@/lib/redis";
// import { InMemoryRedisRepositoryInterface } from "@/repositories/interface/in-memory-redis-repository-interface";

interface GetInvitesLinkClickRequest {
    subscriberId: string
}
export class GetInvitesLinkClickUseCase {
    // constructor (private redisRepository: InMemoryRedisRepositoryInterface) {}

    async execute ({subscriberId}: GetInvitesLinkClickRequest) {
        const count = await redis.hget('acess-invite-link', subscriberId)

        return { count: count ? parseInt(count) : 0}
    }
}