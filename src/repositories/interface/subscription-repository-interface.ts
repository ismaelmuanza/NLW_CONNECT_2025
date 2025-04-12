
export interface SubscriptionBody {
    id?: string
    name: string
    email:string
    created_at?: Date
}

export interface SubscriptionRepositoryInterface {
    create(data: SubscriptionBody): Promise<SubscriptionBody>
    findByEmail(email: string): Promise<SubscriptionBody | null>
}