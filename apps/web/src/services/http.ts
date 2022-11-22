import {z} from "zod";

const BASE_URL = "http://localhost:5000";

export const User = z
    .object({
        id: z.number(),
        name: z.string(),
    })
    .strict();

export const Message = z
    .object({
        id: z.number(),
        user: User,
        content: z.string(),
    })
    .strict();

export const Room = z
    .object({
        id: z.number(),
        name: z.string(),
        space: z.object({
            id: z.number(),
            name: z.string(),
            users: z.array(User),
        }),
        messages: z.array(Message),
    })
    .strict();

export const Space = z
    .object({
        id: z.number(),
        name: z.string(),
        users: z.array(User),
        rooms: z.array(Room),
    })
    .strict();

export const Friend = User.merge(z.object({})).strict();

export type UserType = z.infer<typeof User>;
export type FriendType = z.infer<typeof Friend>;
export type MessageType = z.infer<typeof Message>;
export type RoomType = z.infer<typeof Room>;
export type SpaceType = z.infer<typeof Space>;

export type RequestOptions = {
    data?: {[key: string]: any} | null;
    params?: {[key: string]: any} | null;
    headers?: {[key: string]: string};
    method?: string;
};

const request = async (url: string, opts?: RequestOptions) => {
    const fetchURL = new URL(BASE_URL + url);
    const fetchOpts: RequestInit = {
        method: "GET",
        headers: {},
        body: null,
    };

    if (opts) {
        if (opts.data) {
            // @ts-ignore
            fetchOpts.headers["Content-Type"] = "application/json";
            // @ts-ignore
            fetchOpts.body = JSON.stringify(opts.data);
        }

        if (opts.params) {
            Object.keys(opts.params).forEach((key) => {
                // @ts-ignore
                fetchURL.searchParams.append(key, opts.params[key]);
            });
        }

        opts.method
            ? (fetchOpts.method = opts.method)
            : (fetchOpts.method = "GET");
    }

    try {
        const res = await fetch(fetchURL, fetchOpts);
        return await res.json();
    } catch (err) {
        return err;
    }
};

export const http = {
    me: (): Promise<UserType> => request("/user"),
    getFriends: (): Promise<FriendType[]> => request("/friends"),
    addFriend: (userID: number): Promise<FriendType> =>
        request("/friends", {method: "POST", data: {id: userID}}),
    getRoom: (id: number): Promise<RoomType> =>
        request(`/rooms/${id}`, {}),
    getRooms: (id: number): Promise<RoomType[]> =>
        request("/rooms", {params: {id: id}}),
};
