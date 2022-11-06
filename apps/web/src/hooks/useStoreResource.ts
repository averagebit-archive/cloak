import {createResource} from "solid-js";
import {Accessor, Signal} from "solid-js/types/reactive/signal";
import {useAuthContext} from "~/context/auth";
import {http} from "~/services";
import {User} from "~/types";

export const useStoreResource = (signal?: any) => {
    const storeUser = <T>() => {
        const [store, actions] = useAuthContext();

        return [
            (): User => store,
            (nUser: Accessor<User>): User => {
                actions.setUser(nUser());
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
