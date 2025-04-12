import { SubscriptionBody, SubscriptionRepositoryInterface } from "../repositories/interface/subscription-repository-interface";
import { SubscrioptionAlreadyExistsError } from "./errors/subscription-already-exists-error";

export class SubscriptionUseCase {
    constructor (private subscriptionRepository: SubscriptionRepositoryInterface) {}

    async execute (data: SubscriptionBody) {
        
        const verifyEmailExists = await this.subscriptionRepository.findByEmail(data.email) 

        if(verifyEmailExists) {
            throw new SubscrioptionAlreadyExistsError()
        }

        const subscription = await this.subscriptionRepository.create({
            id: data.id,
            name: data.name,
            email: data.email
        })

        return {
            subscription
        }
    }
}