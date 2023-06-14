export interface  GetProblemResponse  {
    id: string
    title: string
    text: string
    point: number
    limits: {
        memory: number
        time: number
    }
}

export interface CreateCaseSetResponse {
    id: string
    name: string
    point: number
}
export interface CreateCaseSetRequest extends CreateCaseSetResponse{}

export interface CreateProblemRequest extends Omit<GetProblemResponse, "id"> {}
export interface CreateProblemResponse extends GetProblemResponse{}

export interface CreateCaseResponse { 
    id: string
    input: string
    output: string
}

export interface CreateCaseRequest extends Omit<CreateCaseResponse, "id">{}

export interface PutCaseRequest extends CreateCaseRequest{}
export interface PutCaseResponse extends CreateCaseResponse{}

