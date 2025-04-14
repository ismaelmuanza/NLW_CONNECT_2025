import { redis } from "@/lib/redis";
import { SubscriptionRepositoryInterface } from "@/repositories/interface/subscription-repository-interface";

interface GetSubscriberInvitesCountUseCaseRequest {
    subscriberId: string
}

export class GetSubscriberInvitesCountUseCase {
    // constructor (private subscriptionRepository: SubscriptionRepositoryInterface) {}

    async execute ({ subscriberId }: GetSubscriberInvitesCountUseCaseRequest) {
        const count = await redis.zscore('referer:ranking', subscriberId)

        return {
            count: count ? Number.parseInt(count) : 0
        }
    }
}