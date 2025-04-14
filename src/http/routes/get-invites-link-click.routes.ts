import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { getInvitesLinkClickController } from "../controllers/get-invites-link-click-controller";


export const getInvitesLinkClickRoutes: FastifyPluginAsyncZod = async app => {

    app.get('/subscribers/:subscriberId/ranking/clicks',{
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
    }, getInvitesLinkClickController)
}