import { Store } from "solid-js/store/types/store";
import { User } from "../shared/interfaces";
import { createStore } from "solid-js/store";
import { createEffect, createResource } from "solid-js";
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
		setUser: (user?: User | false) => {
			if (!user) {
				setStore(defaultUserStore)
				return
			};

			setStore({
				...user
			});
		},
	};

	return [store, actions];
};

export function createUserActions([user, actions]): any {
    const [userResource, { mutate }] = createResource(() => user.authenticated, http.Auth.user, { initialValue: user });

    createEffect(() => {
        console.log(userResource())
        actions.setUser(userResource())
    });

    return [userResource, {
        login: () => {
            actions.setUserAuthenticated();
        },
        logout: () => {
            actions.setUser(false);
            mutate(user);
        }
    }]
}