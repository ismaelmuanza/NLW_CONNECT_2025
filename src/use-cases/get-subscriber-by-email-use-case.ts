import { SubscriberNotFoundError } from "./errors/subscriber-not-found-error";
import { SubscriptionRepositoryInterface } from "@/repositories/interface/subscription-repository-interface";


interface GetSubscriberByEmailRequest {
    email: string
}

export class GetSubscriberByEmailUseCase {
    constructor (private subscriberRepository: SubscriptionRepositoryInterface) {}

    async execute ({email}: GetSubscriberByEmailRequest) {

        const subscriber = await this.subscriberRepository.findByEmail(email)

        if(!subscriber) {
            throw new SubscriberNotFoundError()
        }

        return {
            id: subscriber.id,
            name: subscriber.name,
            email: subscriber.email,
        }
    }
}