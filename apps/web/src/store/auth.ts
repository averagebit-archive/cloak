import {Store} from "solid-js/store/types/store";
import {User} from "../shared/interfaces";
import {createStore} from "solid-js/store";
import {createContext, createEffect, useContext} from "solid-js";

type UserStore = User & {authenticated: boolean};
type AuthStore = Store<UserStore> | UserStore;
type AuthActions = {
    setUserAuthenticated: () => void;
    setUser: (user: User | false) => void;
};
export type AuthContext = [AuthStore, AuthActions];

export const AuthContext = createContext<AuthContext>();
export const useAuthStore = (): AuthContext =>
    useContext(AuthContext) as AuthContext;

export const createAuth = (): AuthContext => {
    const defaultUserStore = {
        id: Infinity,
        username: "",
        token: "",
        authenticated: false,
    };

    // Destructure object because creeateStore mutates the original.
    const [store, setStore] = createStore({...defaultUserStore});

    createEffect(() =>
        store.token
            ? localStorage.setItem("token", store.token)
            : localStorage.removeItem("token")
    );

    const actions: AuthActions = {
        setUserAuthenticated: () => setStore("authenticated", true),
        setUser: (user: User | false) =>
            user ? setStore(user) : setStore(defaultUserStore),
    };

    return [store, actions];
};
