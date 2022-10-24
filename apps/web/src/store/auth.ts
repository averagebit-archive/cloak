import { Store } from "solid-js/store/types/store";
import { User } from "../shared/interfaces";
import { createStore } from "solid-js/store";
import { createContext, createEffect, createResource, useContext } from "solid-js";
import { http } from "../http";

type UserStore = User & { authenticated: boolean };
type AuthStore = Store<UserStore> | UserStore;
type AuthActions = {
    setUserAuthenticated: () => void;
    setUser: (user?: User | false) => void;
};
export type AuthContextValue = [AuthStore, AuthActions];

export const AuthContext = createContext();
export const useAuthStore = (): AuthContextValue => useContext<AuthContextValue>(AuthContext);

export const createAuth = (): [AuthStore, AuthActions] => {
    const defaultUserStore = {
        id: Infinity,
        username: "",
        token: "",
        authenticated: false
    };

    const [store, setStore] = createStore(defaultUserStore, {
        name: "user"
    });

    createEffect(() => store.token
        ? localStorage.setItem("token", store.token)
        : localStorage.removeItem("token"));

    const actions: AuthActions = {
        setUserAuthenticated: () => setStore("authenticated", true),
        setUser: (user: User | false) => user ? setStore(user) : setStore(defaultUserStore)
    };

    return [store, actions];
};
