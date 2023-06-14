import { CreateSubmissionRequest, CreateSubmissionResponse } from "api/contests/@types"

export type Methods = {
    post: {
        reqBody: CreateSubmissionRequest
        resBody: CreateSubmissionResponse
    }
}