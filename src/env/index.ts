
import 'dotenv/config'

import { z } from "zod"

const envSchema = z.object({
    PORT: z.coerce.number().default(3333),
    NODE_ENV: z.enum(['production', 'dev', 'test']).default('dev')
})

const _env = envSchema.safeParse(process.env)

if(_env.success === false) {
    console.log('Invalid Enviroment Variables.', _env.error.format())

    throw new Error('Invalid Enviroment Variables')
}

export const env = _env.data