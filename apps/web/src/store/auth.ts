import { createEffect, createSignal, createResource, Resource } from "solid-js";
import { SetStoreFunction, Store } from "solid-js/store/types/store";
import { User } from "../shared/interfaces";
import { State } from "./index";

export type AuthState = Resource<User>;

export type AuthActions = {
    fetch: () => void;
    login: () => Promise<void>;
    logout: () => void;
    register: () => Promise<void>;
};

export const defaultUser = {
    id: Infinity,
    username: "",
    token: "",
};

export const createAuth = (
    http: any, // TODO: type this bitch
    state: Store<State>,
    setState: SetStoreFunction<State>
): [AuthState, AuthActions] => {
    const [authenticated, setAuthenticated] = createSignal(false);
    const [user, { mutate }] = createResource<User, boolean>(
        authenticated,
        http.Auth.user,
        {
            initialValue: defaultUser,
        }
    );

    createEffect(() => {
        state.token
            ? localStorage.setItem("token", state.token)
            : localStorage.removeItem("token");
    });

    const actions: AuthActions = {
        fetch: () => {
            setAuthenticated(true);
        },
        login: async () => {
            const user = await http.Auth.login();
            setState({ token: user.token });
            setAuthenticated(true);
        },
        logout: () => {
            mutate(defaultUser);
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
