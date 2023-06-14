import { PutCaseRequest, PutCaseResponse } from "problems/@types"

export type Methods = {
    put: {
        reqBody: PutCaseRequest
        resBody: PutCaseResponse
    }
    delete: {
    }
}