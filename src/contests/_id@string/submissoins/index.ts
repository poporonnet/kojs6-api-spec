import { CreateSubmissionRequest, CreateSubmissionResponse } from "contests/@types"

export type Methods = {
    post: {
        reqBody: CreateSubmissionRequest
        resBody: CreateSubmissionResponse
    }
}