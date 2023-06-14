import { GetContestResponse, PutContestRequest, PutContestResponse } from "contests/@types"

export type Methods = {
    get: {
        resBody: GetContestResponse
    }
    put: {
        reqBody: PutContestRequest
        resBody: PutContestResponse
    }
}