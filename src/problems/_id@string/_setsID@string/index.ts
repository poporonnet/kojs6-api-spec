import { CreateCaseSetRequest, CreateCaseSetResponse } from "problems/@types"

export type Methods = {
    put: {
        reqBody: CreateCaseSetRequest
        resBody: CreateCaseSetResponse
    }
    delete: {}
}