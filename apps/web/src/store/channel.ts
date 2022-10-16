import { createResource, Resource } from "solid-js";
import { Channel } from "../shared/interfaces";

export const defaultChannel = {
    id: Infinity,
    users: [],
    messages: [],
};

export type ChannelState = Resource<Channel>;

export type ChannelActions = {
    sendMessage: (id: number) => Promise<void>;
};

export const createChannel = (http: any): [ChannelState, ChannelActions] => {
    const [channel] = createResource<Channel>(http.Channel.current);

    const actions: ChannelActions = {
        sendMessage: async () => {},
    };

    return [channel, actions];
};
