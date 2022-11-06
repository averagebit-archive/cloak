import {z} from "zod";

const API_URL = "http://localhost:5000";

export const User = z
    .object({
        id: z.number(),
        name: z.string(),
    })
    .strict();

export const Friend = User.merge(z.object({}));

export type UserType = z.infer<typeof User>;
export type FriendType = z.infer<typeof Friend>;

const r = async (method: string, url: string, data?: any) => {
    console.info("CLOAK_API", method, url);

    const headers = {};
    const opts = {method, headers};

    if (data !== undefined) {
        // @ts-ignore
        headers["Content-Type"] = "application/json";
        // @ts-ignore
        opts.body = JSON.stringify(data);
    }

    try {
        const res = await fetch(API_URL + url, opts);
        return await res.json();
    } catch (err) {
        return err;
    }
};

export const http = {
    me: (): Promise<UserType> => r("GET", "/user"),
    getFriends: (): Promise<FriendType[]> => r("GET", "/friends"),
    addFriend: (userID: number): Promise<FriendType> =>
        r("POST", "/friends", userID),
};
