import { createStore } from "solid-js/store";
import { useContext } from "solid-js";
import { createAuth, AuthActions, AuthStore } from "./auth";
import { createChannel, ChannelActions, ChannelStore } from "./channel";
import { http } from "../http";
import { Channel, User } from "../shared/interfaces";
import { Context } from "../App";

export type State = {
    channel: ChannelStore;
    user: AuthStore;
};

export type Actions = {
    channel: ChannelActions;
    user: AuthActions;
};

type Store = [State, Actions];

export const initStore = () => {
    const [state, setState] = createStore({
        channel: {} as Channel,
        user: {} as User,
    });

    setState({
        channel: createChannel(http),
        user: createAuth(http),
    });


    return state;
};

export const useStore = (): Store => useContext(Context) as Store;
