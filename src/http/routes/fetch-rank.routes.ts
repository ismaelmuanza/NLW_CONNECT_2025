import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { getInvitesLinkClickController } from "../controllers/get-invites-link-click-controller";
import { fetchRankController } from "../controllers/fetch-rank-controller";


export const fetchRankRoutes: FastifyPluginAsyncZod = async app => {

    app.get('/subscribers/rank',{
        schema: {
            tags: ['Subscribers:Ranking'],
            summary: 'route used to get the top 3 position rank of subscribers',
            response: {
                200: z.array(
                    z.object({
                        name: z.string(),
                        email: z.string(),
                        score: z.number()
                    })
                )
            }
            
        }
    }, fetchRankController)
}