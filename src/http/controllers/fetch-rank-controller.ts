import { FetchRankUseCase } from "@/use-cases/fetch-ranking-use-case";
import { FastifyReply, FastifyRequest } from "fastify";


export async function fetchRankController (request: FastifyRequest, reply: FastifyReply) {
  
        const fetchRankUseCase = new FetchRankUseCase()

        const {rank} = await fetchRankUseCase.execute()

        return rank

}
