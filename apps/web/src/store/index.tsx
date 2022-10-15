import { createStore } from "solid-js/store";
import { createContext, createResource, Resource, useContext } from "solid-js";
import { createAuth, AuthActions } from "./auth";
import { createChannel, ChannelState, ChannelActions } from "./channel";
import { http } from "./http";
import { User } from "../shared/interfaces";

export type AuthStore = Resource<User>;
export type ChannelStore = Resource<ChannelState> | null;

export type State = {
    token: string | null;
    channel: ChannelStore;
    user: AuthStore;
};

export type Actions = {
    channel: ChannelActions;
    user: AuthActions;
};

type Store = [State, Actions];

const Context = createContext();

export const defaultUser = {
    id: Infinity,
    username: "",
    token: ""
};

export const Provider = (props: any) => {
    // TODO: think of better way of creating initial state
    const [user] = createResource<User>(() => (defaultUser));

    const initialState: State = {
        channel: null,
        token: localStorage.getItem("token"),
        user: user
    };

    const [state, setState] = createStore(initialState);
    const [authState, authActions] = createAuth(http, state, setState);
    const [channelState, channelActions] = createChannel(http);

    setState({
        channel: channelState,
        user: authState
    });

    const actions: Actions = {
        channel: channelActions,
        user: authActions
    };

    return (
        <Context.Provider children={props.children} value={[state, actions]} />
    );
};

export const useStore = (): Store => useContext(Context) as Store;
