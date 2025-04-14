

import { describe, expect, it } from "vitest";
import { GetSubscriberPositionRankingUseCase } from "./get-subscriber-position-ranking-use-case";

describe('Get Subscriber Position Rnanking', () => {

    it('should be able get subscriber position in the ranking', async () => {

        const getSubscriberPositionRankingUseCase = new GetSubscriberPositionRankingUseCase()

        const subscriberId = 'e7405cc7-6680-4779-9096-068b6ca9d26b'

        const {position}  = await getSubscriberPositionRankingUseCase.execute({subscriberId})

        console.log(position)

        expect(position).toBeDefined


    })
})