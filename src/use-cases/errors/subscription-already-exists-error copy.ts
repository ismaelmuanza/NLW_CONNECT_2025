export class SubscrioptionAlreadyExistsError extends Error {
    constructor() {
        super('Subscription already exists.')
    }
}