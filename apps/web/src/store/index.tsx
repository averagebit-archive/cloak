import { createStore } from "solid-js/store";
import { createContext, Resource, useContext } from "solid-js";
import { createAuth, AuthState, AuthActions } from "./auth";
import { createChannel, ChannelState, ChannelActions } from "./channel";
import { http } from "./http";

export type State = {
    channel: Resource<ChannelState>;
    token: string;
    user: Resource<AuthState>;
};

export type Actions = {
    channel: ChannelActions;
    user: AuthActions;
};

type Store = [State, Actions];

const Context = createContext();

export const Provider = (props) => {
    const initialState: State = {
        channel: null,
        token: localStorage.getItem("token"),
        user: null,
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
