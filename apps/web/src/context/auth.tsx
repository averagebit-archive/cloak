import {Store} from "solid-js/store/types/store";
import {createStore} from "solid-js/store";
import {createContext, JSX, useContext} from "solid-js";
import {User} from "~/types";
import {UserType} from "~/services";

type AuthStore = Store<User> | User;
type AuthStoreActions = {
    setUser: (user: User | false) => void;
};
type AuthContext = [AuthStore, AuthStoreActions];

const AuthContext = createContext<AuthContext>();

const AuthProvider = (props: {children: JSX.Element}): JSX.Element => {
    const initialValue = {
        id: Infinity,
        username: "",
        token: "",
    };

    // NOTE: Destructure object because createStore mutates the original.
    const [store, setState] = createStore({...initialValue});

    const actions: AuthStoreActions = {
        setUser: (user: User | false) => {
            user ? setState(user) : setState(initialValue);
        },
    };

    return (
        <AuthContext.Provider
            children={props.children}
            value={[store, actions]}
        />
    );
};

const useAuthContext = (): AuthContext => {
    return useContext(AuthContext) as AuthContext;
};

export {AuthProvider, useAuthContext};
