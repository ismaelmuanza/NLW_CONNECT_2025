import { describe, expect, it } from "vitest";
import { GetSubscriberInvitesCountUseCase } from "./get-subscriber-invites-count-use-case";

describe('Subscribers Invites Link Counts', () => {

    it('should be able get the count subscriber by invite link', async () => {


        const getSubscriberInvitesCountUseCase = new GetSubscriberInvitesCountUseCase()

        const subscriberId = '0a6113f6-88ee-4790-aaa3-5f576ca54f8c'

        const { count } = await getSubscriberInvitesCountUseCase.execute({subscriberId})

        console.log('count: ', count)

        expect(count).toEqual(expect.any(Number))


    })
})