import { Store } from "solid-js/store/types/store";
import { User } from "../shared/interfaces";
import { createStore } from "solid-js/store";
import { createContext, createEffect, createResource, useContext } from "solid-js";
import { http } from "../http";

export type UserStore = User & { authenticated: boolean };
export type AuthStore = Store<UserStore> | UserStore;

export type AuthActions = {
    setUserAuthenticated: () => void;
    setUser: (user?: User | false) => void;
};

const defaultUserStore = {
    id: Infinity,
    username: "",
    token: "",
    authenticated: false
};

export const AuthContext = createContext();
export const useUserStore = (): any => useContext(AuthContext) as any;

export const createAuth = (): [AuthStore, AuthActions] => {
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
        setUser: (user: User | false) => {
            if (!user) {
                setStore(defaultUserStore)
                return
            }

            setStore(user);
        },
    };

    return [store, actions];
};
