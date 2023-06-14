import { CreateProblemRequest, GetProblemResponse } from "./../@types"

export type Methods = {
    get: {
        resBody: GetProblemResponse
    }
    put: {
        reqBody: CreateProblemRequest
        resBody: GetProblemResponse
    }
}