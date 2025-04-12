import {fastify} from "fastify";
import { jsonSchemaTransform, serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";
import {z} from 'zod'
import {fastifyCors} from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { subscribeToEventRoute } from "./http/routes/subscription-to-event.routes";
import { env } from "./env";
const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors)

app.register(fastifySwagger, {
    openapi: {
        info: {
            title: 'NLW CONNECT',
            version: '1.0.0'
        }
    },
    transform: jsonSchemaTransform
})

app.register(fastifySwaggerUi, {
    routePrefix: '/docs'
})

app.register(subscribeToEventRoute)

app.listen({
    port: env.PORT
}).then(function() {console.log('🚀 HTTP Server Running on port', env.PORT)})