import { CreateContestRequest, CreateContestResponse } from "./@types"

export type Methods = {
    post: {
        reqBody: CreateContestRequest
        resBody: CreateContestResponse
    }
}