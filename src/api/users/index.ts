import {User} from "./@types";

export type Methods = {
    post: {
        reqBody: Omit<User, "id">;
        resBody: Omit<User, "role">
    }
    get: {
        resBody: Array<Omit<User, "password" | "email">>
    }
}
