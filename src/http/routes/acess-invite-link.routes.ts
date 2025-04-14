import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { acessInviteLinkController } from "../controllers/acess-invite-link-controller";
import { z } from "zod";



export const acessInviteLinkRoutes: FastifyPluginAsyncZod = async app => {

    app.get('/invites/:subscriptionId',{
        schema: {
            tags: ['Acess Invite Link'],
            summary: 'acess invites links',
            params: z.object({
                subscriptionId: z.string()
            }),
            response: {
                200: z.object({})
            }
        }
    }, acessInviteLinkController)
}