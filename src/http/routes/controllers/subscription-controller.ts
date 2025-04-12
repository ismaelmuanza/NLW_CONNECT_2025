import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { SubscrioptionAlreadyExistsError } from "../../../use-cases/errors/subscription-already-exists-error";
import { PrismaRepository } from "../../../repositories/prisma-repository";
import { SubscriptionUseCase } from "../../../use-cases/subscription-use-case";

export async function subscriptionController (request: FastifyRequest, reply: FastifyReply) {
    
    const subscriptionSchema = z.object({
        name: z.string(),
        email: z.string().email()
    })

    const {name, email} = subscriptionSchema.parse(request.body)

    try {

        const subscriptioRepository = new PrismaRepository()
        const subscriptionUseCase = new SubscriptionUseCase(subscriptioRepository)

        const {subscription} = await subscriptionUseCase.execute({name, email})
        
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