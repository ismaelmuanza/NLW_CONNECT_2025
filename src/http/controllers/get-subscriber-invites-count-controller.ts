import { GetSubscriberInvitesCountUseCase } from "@/use-cases/get-subscriber-invites-count-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function getSubscriberInvitesCountController (request: FastifyRequest, reply: FastifyReply) {

    const schemaParams = z.object({
        subscriberId: z.string()
    })
    
    const {subscriberId} = schemaParams.parse(request.params)
    
        const getSubscriberInvitesCountUseCase = new GetSubscriberInvitesCountUseCase()

        const {count} = await getSubscriberInvitesCountUseCase.execute({subscriberId})

        return {count}

}
