import { http } from "./http";
import { createSignal, createResource, Resource } from "solid-js";

export type User = {
    username: string;
}

export type UserActions = {
    register: () => Promise<void>
    login: () => Promise<void>
    logout: () => Promise<void>
};

export const createAuth = (): [Resource<User>, UserActions] => {
    const [authenticated, setAuthenticated] = createSignal(false);
    const [user, { mutate }] = createResource(authenticated, http.getUser);

    const actions: UserActions = {
        async register() {
            setAuthenticated(true);
        },
        async login() {
            setAuthenticated(true);
        },
        async logout() {
            mutate(undefined);
        }
    };

    return [user, actions];
};

export default createAuth;
