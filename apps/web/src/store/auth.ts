import { createEffect, createSignal, createResource, Resource } from "solid-js";
import { User } from "../shared/interfaces";

export type AuthState = User;

export type AuthActions = {
    me: () => void;
    login: () => Promise<void>;
    logout: () => void;
    register: () => Promise<void>;
};

export const createAuth = (
    http,
    state,
    setState
): [Resource<AuthState>, AuthActions] => {
    const [authenticated, setAuthenticated] = createSignal(false);
    const [user, { mutate }] = createResource(authenticated, http.Auth.user);

    createEffect(() => {
        state.token
            ? localStorage.setItem("token", state.token)
            : localStorage.removeItem("token");
    });

    const actions: AuthActions = {
        me: () => {
            setAuthenticated(true);
        },
        login: async () => {
            const user = await http.Auth.login();
            setState({ token: user.token });
            setAuthenticated(true);
        },
        logout: () => {
            mutate(undefined);
            setState({ token: undefined });
            setAuthenticated(false);
        },
        register: async () => {
            const user = await http.Auth.register();
            setState({ token: user.token });
            setAuthenticated(true);
        },
    };

    return [user, actions];
};
