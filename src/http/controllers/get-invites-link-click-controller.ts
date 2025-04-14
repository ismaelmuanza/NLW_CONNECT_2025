// export const getInvitesLinkClickController: FastifyPluginAsyncZod = async app => {
//     app.get('/invites/:subscribeId/ranking/click')
// }

import { GetInvitesLinkClickUseCase } from "@/use-cases/get-invites-link-click-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getInvitesLinkClickController (request: FastifyRequest, reply: FastifyReply) {
    const schemaParams = z.object({
        subscriberId: z.string()
    })

    const {subscriberId} = schemaParams.parse(request.params)

    const getInvitesLinkClickUseCase = new GetInvitesLinkClickUseCase()

    const { count } = await getInvitesLinkClickUseCase.execute({subscriberId})

    return reply.status(200).send({count})
}