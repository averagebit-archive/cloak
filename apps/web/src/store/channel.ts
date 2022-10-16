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
    fetchChannel: () => Promise<void>;
};

export const createChannel = (http: any): [ChannelStore, ChannelActions] => {
    const [store, setStore] = createStore({ ...defaultChannelStore });

    const actions: ChannelActions = {
        fetchChannel: async () => {
            const channel = await http.Channel.fetch();
            setStore({ ...channel });
        },
    };

    return [store, actions];
};
