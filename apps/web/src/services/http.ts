const API_URL = "http://localhost:5000";

const r = async (method: string, url: string, data?: any) => {
    console.info("CLOAK_API", method, url);

    const headers = {};
    const opts = {method, headers};

    if (data !== undefined) {
        headers["Content-Type"] = "application/json";
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
    me: () => r("GET", "/user"),
    getFriends: () => r("GET", "/friends"),
    addFriend: (user: any) => r("POST", "/friends", user),
};
