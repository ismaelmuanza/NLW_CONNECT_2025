import { subscriptionController } from "./controllers/subscription-controller";
import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";

export const subscriptionsRoutes: FastifyPluginAsyncZod = async app =>  {
  
    app.post('/subscriptions', {
        schema: {
            tags: ['Subscriptions'],
            summary: 'Create a subscription',
            description: 'cannot to create a subscription with the same email',
            body: z.object({
                name: z.string(),
                email: z.string()
            }),
            response: {
                201: z.object({
                    subscription: z.object({
                        id: z.string(),
                        name: z.string(),
                        email: z.string()
                    })
                })
            }
        }
    }, subscriptionController)
}