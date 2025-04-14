import { beforeEach, describe, expect, it} from 'vitest'
import { InMemorySubscriptionRepository } from '../repositories/in-memory-subscription-repository'
import { SubscriptionUseCase } from './subscription-use-case'
import { SubscrioptionAlreadyExistsError } from './errors/subscription-already-exists-error copy'

describe ('Subscriptions Test', () => {

    let subscriptionRepository: InMemorySubscriptionRepository
    let subscriptionUseCase:SubscriptionUseCase
    
    beforeEach(() => {
        subscriptionRepository = new InMemorySubscriptionRepository()
        subscriptionUseCase = new SubscriptionUseCase(subscriptionRepository)
    })

    it('should not be able to create a subscription with an email already exists', async () => {
        
        const {subscription} = await subscriptionUseCase.execute({
            id: 'subscribe-1',
            name: 'Ismael Muanza',
            email: 'muanza@gmail.com',
        })

        expect(async () => {
            await subscriptionUseCase.execute({
                id: 'subscribe-2',
                name: 'Ismael Muanza2',
                email: 'muanza@gmail.com',
            })
        }).rejects.toBeInstanceOf(SubscrioptionAlreadyExistsError)
        expect(subscription?.id).toEqual(expect.any(String))
    })

    it('should be able to create a subscription', async () => {

        await subscriptionUseCase.execute({
            id: 'subscribe-1',
            name: 'Ismael Muanza',
            email: 'muanza@gmail.com',
        })
        
        const {subscription} = await subscriptionUseCase.execute({
            id: 'subscribe-1',
            name: 'Ismael Muanza',
            email: 'muanza1@gmail.com',
            refererId: 'subscribe-1'
        })

        expect(subscription?.id).toEqual(expect.any(String))
        expect(subscription?.name).toEqual('Ismael Muanza')

        console.log(subscription)
    })
})