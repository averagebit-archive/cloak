import { Store } from "solid-js/store/types/store";
import { createStore } from "solid-js/store";
import { Channel } from "../shared/interfaces";

export type ChannelStore = Store<Channel> | Channel;

export const defaultChannelStore = {
    id: Infinity,
    users: [],
    messages: [],
};

export type ChannelActions = {
    updateChannel: (channel: any) => void;
};

export const createChannel = (): [ChannelStore, ChannelActions] => {
    const [store, setStore] = createStore({ ...defaultChannelStore });

    const actions: ChannelActions = {
        updateChannel: (channel: any) => {
            setStore({ ...channel });
        },
    };

    return [store, actions];
};
