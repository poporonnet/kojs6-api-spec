export interface CreateContestRequest {
    title: string
    description: string
    startAt: string
    endAt: string
}

export interface CreateContestResponse {
    id: string
    title: string
    description: string
    startAt: string
    endAt: string
}

export interface GetSubmissionResponse {
    id: string
    submittedAt: Date
    user: {
        id: string
        name: string
    }
    problem: {
        id: string
        name: string
    }
    lang: string
    points: number
    status: string
    timne: number
    memory: null
}

export interface GetContestResponse extends CreateContestResponse{}

export interface PutContestRequest extends CreateContestRequest{}
export interface PutContestResponse extends CreateContestResponse{}

export interface CreateSubmissionResponse {
    id: string
    problemID: string
    code: string
    lang: string
}

export interface CreateSubmissionRequest extends Omit<CreateSubmissionResponse, "id">{}
