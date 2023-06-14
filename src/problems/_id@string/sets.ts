import { CreateCaseSetRequest, CreateCaseSetResponse } from "problems/@types"

export type Methods = {
    post: {
        reqBody: CreateCaseSetRequest
        resBody: CreateCaseSetResponse
    }
}