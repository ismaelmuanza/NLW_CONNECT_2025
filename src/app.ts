import {fastify} from "fastify";
import fastifyCors from "@fastify/cors";
// import { ZodError } from "zod";
import { jsonSchemaTransform, serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";
// import { env } from "./env";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { acessInviteLinkRoutes } from "./http/routes/acess-invite-link.routes";
import { getInvitesLinkClickRoutes } from "./http/routes/get-invites-link-click.routes";
import { getSubscriberByEmailRoutes } from "./http/routes/get-subscriber-by-email.routes";
import { getSubscriberInvitesCountRoutes } from "./http/routes/get-subscriber-invites-count.routes";
import { subscriptionToEventsRoutes } from "./http/routes/subscriptions-to-event.routes";
import { getSubscriberPositionRankingRoutes } from "./http/routes/get-subscriber-position-ranking.routes";
import { fetchRankRoutes } from "./http/routes/fetch-rank.routes";

export const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors, {
    origin: true
})

app.register(fastifySwagger, {
    openapi: {
        info: {
            title: 'Sistem Send Invite',
            version: '1.0.0'
        }
    },
    transform: jsonSchemaTransform
})

app.register(fastifySwaggerUi, {
    routePrefix: '/docs'
})

app.register(subscriptionToEventsRoutes)
app.register(acessInviteLinkRoutes)
app.register(getInvitesLinkClickRoutes)
app.register(getSubscriberByEmailRoutes)
app.register(getSubscriberInvitesCountRoutes)
app.register(getSubscriberPositionRankingRoutes)
app.register(fetchRankRoutes)

// app.setErrorHandler((err, _, reply) => {
  
//         if(err instanceof ZodError) {
//             return reply.status(400).send({message: err.message, issues: err.format()})
//         } 

//         if(env.NODE_ENV !== 'production') {
//             console.error(err)
//         }

//         return reply.status(500).send({message: 'Internal server error.'})
// })