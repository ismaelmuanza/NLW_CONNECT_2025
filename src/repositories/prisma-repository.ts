import { Prisma } from "@prisma/client";
import { SubscriptionRepositoryInterface } from "./interface/subscription-repository-interface";
import { prisma } from "../lib/prisma";
import { randomUUID } from 'node:crypto'

export class PrismaRepository implements SubscriptionRepositoryInterface {

    async create(data: Prisma.SubscriprionCreateInput) {
        const subscription = await prisma.subscriprion.create({
            data: {
                id: data.id ?? randomUUID(),
                name: data.name,
                email: data.email
            }
        })

        return subscription
    }
    async findByEmail(email: string) {

        const subscription = await prisma.subscriprion.findUnique({where: {email}})

        return subscription
    }

}