import { createStore } from "solid-js/store";
import { createContext, createResource, useContext } from "solid-js";
import { createAuth, AuthActions, AuthState, defaultUser } from "./auth";
import {
    createChannel,
    ChannelActions,
    ChannelState,
    defaultChannel,
} from "./channel";
import { http } from "./http";
import { Channel, User } from "../shared/interfaces";

export type State = {
    token: string | null;
    channel: ChannelState;
    user: AuthState;
};

export type Actions = {
    channel: ChannelActions;
    user: AuthActions;
};

type Store = [State, Actions];

const Context = createContext();

export const Provider = (props: any) => {
    // TODO: think of better way of creating initial state
    const [user] = createResource<User>(() => defaultUser);
    const [channel] = createResource<Channel>(() => defaultChannel);

    const initialState: State = {
        channel: channel,
        token: localStorage.getItem("token"),
        user: user,
    };

    const [state, setState] = createStore(initialState);
    const [authState, authActions] = createAuth(http, state, setState);
    const [channelState, channelActions] = createChannel(http);

    setState({
        channel: channelState,
        user: authState,
    });

    const actions: Actions = {
        channel: channelActions,
        user: authActions,
    };

    return (
        <Context.Provider children={props.children} value={[state, actions]} />
    );
};

export const useStore = (): Store => useContext(Context) as Store;
