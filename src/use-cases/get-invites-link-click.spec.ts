


import { describe, expect, it } from "vitest";
import { GetInvitesLinkClickUseCase } from "./get-invites-link-click-use-case";

describe('Get Invites Clicks', () => {

    it('Get Total Invites Clicks', async () => {
        const sut = new GetInvitesLinkClickUseCase()

        const subscriberId = 'user-1'

        const {count} = await sut.execute({
            subscriberId
        })

        expect(count).toEqual(expect.any(Number))
        expect(subscriberId).toEqual(expect.any(String))

        console.log(count)
    })
})