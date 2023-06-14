import {LoginResponse, User} from "../users/@types";

export type Methods = {
    post: {
        reqBody: Omit<User, "id" | "name">
        resBody: LoginResponse
    }
}
