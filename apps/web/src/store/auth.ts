import { Store } from "solid-js/store/types/store";
import { User } from "../shared/interfaces";
import { createStore } from "solid-js/store";
import {
    Accessor,
    createContext,
    createResource,
    Signal,
    useContext
} from "solid-js";
import { http } from "../http";

type AuthStore = Store<User> | User;
type AuthActions = {
    setUser: (user: User | false) => void;
};
export type AuthContext = [AuthStore, AuthActions];

export const AuthContext = createContext<AuthContext>();
export const useAuthStore = (): AuthContext => useContext(AuthContext) as AuthContext;

export const useResource = (signal?: any) => {
    const storeUser = <T>() => {
        const [store, actions] = useAuthStore();

        return [
            (): User => store,
            (nUser: Accessor<User>): User => {
                actions.setUser(nUser());
                return store;
            }
        ] as Signal<T>;
    };

    if (signal) {
        return createResource(signal, http.Auth.user, {
            storage: storeUser
        });
    } else {
        return createResource(http.Auth.user, {
            storage: storeUser
        });
    }
};

export const createAuth = (): AuthContext => {
    const defaultUserStore = {
        id: Infinity,
        username: "",
        token: ""
    };

    // NOTE: Destructure object because createStore mutates the original.
    const [store, setStore] = createStore({ ...defaultUserStore });

    const actions: AuthActions = {
        setUser: (user: User | false) => {
            if (user) {
                localStorage.setItem("token", user.token);
                setStore(user);
            } else {
                setStore(defaultUserStore);
            }
        }
    };

    return [store, actions];
};
