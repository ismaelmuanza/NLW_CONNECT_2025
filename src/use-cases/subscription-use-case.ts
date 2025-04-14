import { redis } from "@/lib/redis";
import { SubscriptionRepositoryInterface } from "../repositories/interface/subscription-repository-interface";
import { SubscrioptionAlreadyExistsError } from "./errors/subscription-already-exists-error copy";

interface SubscriptionRequest {
    id?: string
    name: string
    email:string
    refererId?: string | null
}


export class SubscriptionUseCase {
    constructor (private subscriptionRepository: SubscriptionRepositoryInterface) {}

    async execute (data: SubscriptionRequest) {
        
        const verifyEmailExists = await this.subscriptionRepository.findByEmail(data.email) 

        if(verifyEmailExists) {
            throw new SubscrioptionAlreadyExistsError()
        }

        const subscription = await this.subscriptionRepository.create({
            id: data.id,
            name: data.name,
            email: data.email
        })

        if(data.refererId) {
            await redis.zincrby('referer:ranking', 1, data.refererId)
        }

        return {
            subscription
        }
    }
}