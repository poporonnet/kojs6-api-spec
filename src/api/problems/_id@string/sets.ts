import { CreateCaseSetRequest, CreateCaseSetResponse } from "../@types"

export type Methods = {
    post: {
        reqBody: CreateCaseSetRequest
        resBody: CreateCaseSetResponse
    }
}