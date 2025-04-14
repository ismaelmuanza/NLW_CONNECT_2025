import { PrismaRepository } from "@/repositories/prisma-repository";
import { SubscriberNotFoundError } from "@/use-cases/errors/subscriber-not-found-error";
import { GetSubscriberByEmailUseCase } from "@/use-cases/get-subscriber-by-email-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function GetSubscriberByEmailController (request: FastifyRequest, reply: FastifyReply) {

    const schemaParams = z.object({
        email: z.string().email()
    })
    
    const {email} = schemaParams.parse(request.params)
    
    try {
        const subscriberRepository = new PrismaRepository()
        const getSubscriberByEmailUseCase = new GetSubscriberByEmailUseCase(subscriberRepository)

        const subscriber = await getSubscriberByEmailUseCase.execute({email})

        return reply.status(200).send({
            subscriber: {
                id: subscriber.id,
                name: subscriber.name,
                email: subscriber.email
            }
        })

    } catch (err) {
        if(err instanceof SubscriberNotFoundError) {
            return reply.status(404).send({message: err.message})
        }
    }



}
