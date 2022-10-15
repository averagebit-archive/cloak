import { createResource, Resource } from "solid-js";
import { Channel } from "../shared/interfaces";

export type ChannelState = Channel;

export type ChannelActions = {
    sendMessage: (id: number) => Promise<void>;
};

export const createChannel = (
    http
): [Resource<ChannelState>, ChannelActions] => {
    const [channel] = createResource(http.Channel.current);

    const actions: ChannelActions = {
        sendMessage: async () => {},
    };

    return [channel, actions];
};
