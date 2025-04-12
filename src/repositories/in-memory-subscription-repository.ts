import { SubscriptionBody, SubscriptionRepositoryInterface } from "./interface/subscription-repository-interface";
import {randomUUID} from 'node:crypto'

export class InMemorySubscriptionRepository implements SubscriptionRepositoryInterface {
  
    private subscriptions: SubscriptionBody[] = []

    async findByEmail(email: string) {
        const subscription = this.subscriptions.find(sub => sub.email === email)

        if(!subscription) {
            return null
        }

        return subscription
    }

    async create(data: SubscriptionBody){

        const subscription:SubscriptionBody = {
            id: data.id ?? randomUUID(),
            name: data.name,
            email: data.email,
            created_at: new Date()
        }

        this.subscriptions.push(subscription)
        
        return subscription
    }

}