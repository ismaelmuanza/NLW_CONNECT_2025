import { GetSubscriberPositionRankingUseCase } from "@/use-cases/get-subscriber-position-ranking-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function getSubscriberPositionRankingController (request: FastifyRequest, reply: FastifyReply) {

    const schemaParams = z.object({
        subscriberId: z.string()
    })
    
    const {subscriberId} = schemaParams.parse(request.params)
    
        const getSubscriberPositionRankingUseCase = new GetSubscriberPositionRankingUseCase()

        const {position} = await getSubscriberPositionRankingUseCase.execute({subscriberId})

        return {position}

}
