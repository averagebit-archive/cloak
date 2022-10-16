import { Store } from "solid-js/store/types/store";
import { User } from "../shared/interfaces";
import { createStore } from "solid-js/store";
import { createEffect } from "solid-js";

export type UserStore = User & { authenticated: boolean };
export type AuthStore = Store<UserStore> | User;

export type AuthActions = {
    setUserAuthenticated: () => void;
    login: () => Promise<void>;
    logout: () => void;
    register: () => Promise<void>;
};

const defaultUserStore = {
    id: Infinity,
    username: "",
    token: "",
    authenticated: false
};

export const createAuth = (
    http: any // TODO: type this bitch
): [AuthStore, AuthActions] => {
    const [store, setStore] = createStore({ ...defaultUserStore }, {
        name: "user"
    });

    createEffect(() => {
        store.token
            ? localStorage.setItem("token", store.token)
            : localStorage.removeItem("token");
    });

    const actions: AuthActions = {
        setUserAuthenticated: () => {
            setStore({
                authenticated: true
            });
        },
        login: async () => {
            const user = await http.Auth.login();
            setStore({
                ...user,
                authenticated: true
            });
        },
        logout: () => {
            setStore(defaultUserStore);
        },
        register: async () => {
            await http.Auth.register();
            setStore({
                authenticated: true
            });
        }
    };

    return [store, actions];
};
