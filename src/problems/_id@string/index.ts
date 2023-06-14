import { CreateProblemRequest, GetProblemResponse } from "problems/@types"

export type Methods = {
    get: {
        resBody: GetProblemResponse
    }
    put: {
        reqBody: CreateProblemRequest
        resBody: GetProblemResponse
    }
}