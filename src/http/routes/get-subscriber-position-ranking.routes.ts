import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { getSubscriberPositionRankingController } from "../controllers/get-subscriber-position-ranking-controller";


export const getSubscriberPositionRankingRoutes: FastifyPluginAsyncZod = async app => {

    app.get('/subscribers/:subscriberId/ranking/position',{
        schema: {
            tags: ['Subscribers:Ranking'],
            summary: 'route used to get subscriber position ranking',
            params: z.object({
                subscriberId: z.string()
            }),
            response: {
                200: z.object({
                    position: z.number().nullable()
                })
            }
            
        }
    }, getSubscriberPositionRankingController)
}