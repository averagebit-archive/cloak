import { http } from "./http";
import { createSignal, createResource } from "solid-js";

export const createAuth = (actions) => {
    const [authenticated, setAuthenticated] = createSignal(false);
    const [user, { mutate }] = createResource(authenticated, http.getUser);

    Object.assign(actions, {
        async register() {
            setAuthenticated(true);
        },
        async login() {
            setAuthenticated(true);
        },
        logout() {
            mutate(undefined);
        },
        // async update(user) {
        //     const user = http.update(user);
        //     mutate(user);
        // },
    });

    return user;
};

export default createAuth;
