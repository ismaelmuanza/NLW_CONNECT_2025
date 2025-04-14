import { HIncrby, InMemoryRedisRepositoryInterface, Store } from "./interface/in-memory-redis-repository-interface"


export class InMemoryRedisRepository implements InMemoryRedisRepositoryInterface {
    
    private store: Store = {}

    async hgetall(hash: string)  {
        return this.store[hash];
      }
      

    async hincrby ({hash, field, increment}: HIncrby) {
        if(!this.store[hash]) {
            this.store[hash] = {}
        }

        if(!this.store[hash][field]) {
            this.store[hash][field] = 0
        }

        this.store[hash][field] += increment

        const countValue = this.store[hash][field]

        return countValue

    }


}