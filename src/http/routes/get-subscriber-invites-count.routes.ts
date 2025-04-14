import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { getSubscriberInvitesCountController } from "../controllers/get-subscriber-invites-count-controller";


export const getSubscriberInvitesCountRoutes: FastifyPluginAsyncZod = async app => {

    app.get('/subscribers/:subscriberId/ranking/count',{
        schema: {
            tags: ['Subscribers:Ranking'],
            summary: 'route used to get a total invites link clicks',
            params: z.object({
                subscriberId: z.string()
            }),
            response: {
                200: z.object({
                    count: z.number()
                })
            }
            
        }
    }, getSubscriberInvitesCountController)
}