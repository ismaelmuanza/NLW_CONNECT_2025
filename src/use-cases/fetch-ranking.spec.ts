import { describe, expect, it } from "vitest";
import { FetchRankUseCase } from "./fetch-ranking-use-case";

describe('Fetch Rank Test', () => {
    
    it('should be able get the rank', async () => {

        const fetchRankUseCase = new FetchRankUseCase()

        const {rank} = await fetchRankUseCase.execute()

        // console.log(rank)

        expect(Array.isArray(rank)).toBe(true); // garante que é uma lista

        // garante que pelo menos um item tenha a estrutura esperada
        expect(rank[0]).toEqual(
            expect.objectContaining({
              name: expect.any(String),
              email: expect.any(String),
              score: expect.any(Number)
            })
          );

        // (Opcional) Garante que todos os itens tenham essa estrutura
        rank.forEach(item => {
            expect(item).toEqual(
                expect.objectContaining({
                name: expect.any(String),
                email: expect.any(String),
                score: expect.any(Number)
                })
            );
        });

        // (Opcional) Garante que a resposta recebida seja exatamente igual a esperada
        // expect(rank).toEqual([
        //     {
        //       name: 'John Doe',
        //       email: 'doe@gmail.com',
        //       score: 2
        //     },
        //     {
        //       name: 'Antony Jr',
        //       email: 'jr@gmail.com',
        //       score: 1
        //     }
        //   ]);
    });


})