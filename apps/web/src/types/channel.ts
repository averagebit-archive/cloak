import {User} from "./user";

export type ChannelMessage = {
    user: User;
    content: string;
};

export type Channel = {
    id: number;
    users: User[];
    messages: ChannelMessage[];
};
