import {Store} from "solid-js/store/types/store";
import {User} from "../shared/interfaces";
import {createStore} from "solid-js/store";
import {
    createContext,
    createResource,
    Signal,
    useContext,
} from "solid-js";
import {http} from "../http";

type UserStore = User;
type AuthStore = Store<UserStore> | UserStore;
type AuthActions = {
    setUser: (user: User | false) => void;
};
export type AuthContext = [AuthStore, AuthActions];

export const AuthContext = createContext<AuthContext>();
export const useAuthStore = (): AuthContext => {
    return useContext(AuthContext) as AuthContext;
};

export const useResource = (signal?: any) => {
    const storeUser = <T>(user: T) => {
        const [store, actions] = useAuthStore();

        return [
            (): User => store,
            (nUser: User): User => {
                actions.setUser(nUser);
                return store;
            },
        ] as Signal<T>;
    };

    if (signal) {
        return createResource(signal, http.Auth.user, {
            storage: storeUser,
        });
    } else {
        return createResource(http.Auth.user, {
            storage: storeUser,
        });
    }
};

export const createAuth = (): AuthContext => {
    const defaultUserStore = {
        id: Infinity,
        username: "",
        token: "",
    };

    // Destructure object because creeateStore mutates the original.
    const [store, setStore] = createStore({...defaultUserStore});

    const actions: AuthActions = {
        setUser: (user: User | false) => {
            if (user) {
                localStorage.setItem("token", user().token);
                setStore(user);
            } else {
                setStore(defaultUserStore);
            }
        },
    };

    return [store, actions];
};
