import {User} from "../@types";

export type Methods = {
    get: {
        resBody: Omit<User, "password" | "email">
    }
}
