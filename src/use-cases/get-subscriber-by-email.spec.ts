import { InMemorySubscriptionRepository } from "@/repositories/in-memory-subscription-repository";
import { describe, expect, it } from "vitest";
import { SubscriberNotFoundError } from "./errors/subscriber-not-found-error";
import { GetSubscriberByEmailUseCase } from "./get-subscriber-by-email-use-case";

describe('Subscribers Test', () => {


    
    it('should not be able get subscriber not exists', async () => {

        const subscriberRepository = new InMemorySubscriptionRepository()
        const subscriberEmailUseCase = new GetSubscriberByEmailUseCase(subscriberRepository)


        const email = 'email-not-exists'

        expect(async () => {
            await subscriberEmailUseCase.execute({email})
        }).rejects.toBeInstanceOf(SubscriberNotFoundError)

    })

    it('should be able get subscriber by email', async () => {


        const subscriberRepository = new InMemorySubscriptionRepository()
        const subscriberEmailUseCase = new GetSubscriberByEmailUseCase(subscriberRepository)

        const email = 'muanza@gmail.com'

        await subscriberRepository.create({
            name: 'Ismael Muanza',
            email,
            created_at: new Date()
        })

        const subscriber = await subscriberEmailUseCase.execute({email})


        expect(subscriber?.id).toEqual(expect.any(String))
        expect(subscriber?.name).toEqual('Ismael Muanza')

        console.log(subscriber)

    })
})