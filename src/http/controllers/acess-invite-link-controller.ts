import { InMemoryRedisRepository } from "@/repositories/in-memory-redis-repository";
import { AcessInviteLinkUseCase } from "@/use-cases/acess-invite-link-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export function acessInviteLinkController (request: FastifyRequest, reply: FastifyReply) {
    const schemaBody = z.object({
        subscriptionId: z.string()
    })

    const { subscriptionId } = schemaBody.parse(request.params)

    console.log(subscriptionId)

    const redirectUrl = new URL('http://localhost:3333')

    redirectUrl.searchParams.set('referral', subscriptionId)


    // const redisRepository = new InMemoryRedisRepository()
    const acessInviteLinkUseCase = new AcessInviteLinkUseCase()

    acessInviteLinkUseCase.execute({
        hash: 'acess-invite-link',
        field: subscriptionId,
        increment: 1
    })

    // console.log(redirectUrl)

    return reply.redirect(redirectUrl.toString(), 302)


    // acessInviteLinkUseCase.execute
}