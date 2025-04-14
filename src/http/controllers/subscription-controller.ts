import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { PrismaRepository } from "../../repositories/prisma-repository";
import { SubscriptionUseCase } from "../../use-cases/subscription-use-case";
import { SubscrioptionAlreadyExistsError } from "@/use-cases/errors/subscription-already-exists-error copy";

export async function subscriptionController (request: FastifyRequest, reply: FastifyReply) {

    try {

        const subscriptionSchema = z.object({
            name: z.string(),
            email: z.string().email(),
            referer: z.string().nullish()
        })

        const {name, email, referer} = subscriptionSchema.parse(request.body)

            const subscriptioRepository = new PrismaRepository()
            const subscriptionUseCase = new SubscriptionUseCase(subscriptioRepository)

            const {subscription} = await subscriptionUseCase.execute({name, email, refererId: referer})

            return reply.status(201).send({
                subscription: {
                    id: subscription.id,
                    name: subscription.name,
                    email: subscription.email
                }
            })

    } catch (err) {
        if(err instanceof SubscrioptionAlreadyExistsError) {
            return reply.status(409).send({message: err.message})
        }

        throw err
    }
}