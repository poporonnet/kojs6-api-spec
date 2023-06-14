import { CreateCaseRequest, CreateCaseResponse } from "problems/@types"

export type Methods = {
    post: {
        reqBody: CreateCaseRequest
        resBody: CreateCaseResponse
    }
}