import { redis } from "@/lib/redis";
// import { SubscriptionRepositoryInterface } from "@/repositories/interface/subscription-repository-interface";

interface GetSubscriberPositionRankingRequest {
    subscriberId: string
}

export class GetSubscriberPositionRankingUseCase {
    // constructor (private subscriberRepository: SubscriptionRepositoryInterface) {}

    async execute ({subscriberId}: GetSubscriberPositionRankingRequest) {

        const rank = await redis.zrank('referer:ranking', subscriberId)

        if(rank === null) {
            return {position: null }
        }

        return {position: rank + 1}
    }
}