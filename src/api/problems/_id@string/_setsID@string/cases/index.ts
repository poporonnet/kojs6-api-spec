import { CreateCaseRequest, CreateCaseResponse } from "../../../@types"

export type Methods = {
    post: {
        reqBody: CreateCaseRequest
        resBody: CreateCaseResponse
    }
}