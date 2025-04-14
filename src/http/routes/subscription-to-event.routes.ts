// import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
// import { z } from "zod";



// export const subscribeToEventRoute: FastifyPluginAsyncZod = async app =>  {
    
// app.post('/subscriptions', {
//     schema: {
//         tags: ['Subscriptions'],
//         summary: 'Create a subscription to event',
//         body: z.object({
//             name: z.string(),
//             email: z.string().email()
//         }),
//         response: {
//             201: z.object({
//                 subscription: z.object({
//                     name: z.string(),
//                     email: z.string()
//                 })
//             })
//         }
//     }
// }, async (request, reply) => {
//     const {name, email} = request.body

//     const subscription = {name, email}

//     return reply.status(201).send({
//         subscription
//     })
// })
// }

