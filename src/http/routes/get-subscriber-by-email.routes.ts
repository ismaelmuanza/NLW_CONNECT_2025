import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { GetSubscriberByEmailController } from "../controllers/get-subscriber-by-email-controller";
import { z } from "zod";


export const getSubscriberByEmailRoutes: FastifyPluginAsyncZod = async app => {

    app.get('/subscriber/:email', {
        schema: {
            tags: ['Subscribers'],
            summary: 'Get Subscriber by email',
            params: z.object({
                email: z.string().email()
            }),
            response: {
                200: z.object({
                    subscriber: z.object({   
                        id: z.string(),
                        name: z.string(),
                        email: z.string()
                    })
                })
            }
        }
    }, GetSubscriberByEmailController)
} 