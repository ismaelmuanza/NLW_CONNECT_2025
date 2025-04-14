import { prisma } from "@/lib/prisma";
import { redis } from "@/lib/redis";
// import { InMemoryRedisRepositoryInterface } from "@/repositories/interface/in-memory-redis-repository-interface";

export class FetchRankUseCase {
    // constructor (private redisRepository: InMemoryRedisRepositoryInterface) {}

    async execute () {
        const ranking = await redis.zrevrange('referer:ranking', 0, 3,'WITHSCORES')

        const subscriberIdAndScore: Record<string, number> = {}

        for(let i = 0; i < ranking.length; i += 2 ) {
            subscriberIdAndScore[ranking[i]] = parseInt(ranking[i+1])
        }

        const subscribers = await prisma.subscriprion.findMany({
            where: {
                id: {
                    in: Object.keys(subscriberIdAndScore)
                }
            }
        })

        const rankingWithScore = subscribers.map(subscriber => {
            return {
                name: subscriber.name,
                email: subscriber.email,
                score: subscriberIdAndScore[subscriber.id]
            }
        }).sort((subX, subY) => subY.score - subX.score)
        
        
        return { 
            rank: rankingWithScore
        }
    }
}