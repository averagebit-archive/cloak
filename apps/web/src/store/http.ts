// TODO: turn into a fetch wrapper, pass state.token with requests
const req = async (
    method: string,
    url: string,
    data: any,
    timeout?: number
) => {
    try {
        const res = await mockRequest(data, timeout);
        return res.data;
    } catch (err) {
        return err;
    }
};

export const http = {
    Auth: {
        user: () => req("GET", "/user", mockUser, 500),
        login: () => req("POST", "/login", mockUser, 500),
        register: () => req("POST", "/register", mockUser, 500),
    },
    Channel: {
        current: () => req("GET", "/channel", mockChannel, 1000),
    },
};

// mock stuff
const mockRequest = (data: any, timeout?: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data.error) {
                reject(new Error(data.error));
            }
            resolve({ data: data });
        }, timeout || 250);
    });
};

const mockUser = {
    id: 0,
    username: "averagebit",
    token: "jwt-token",
};

const mockChannel = {
    id: 0,
    users: [
        {
            id: 1,
            username: "factor",
        },
        {
            id: 0,
            username: "averagebit",
        },
    ],
    messages: [
        {
            user: {
                id: 1,
                username: "factor",
            },
            content: "JS is the best",
        },
        {
            user: {
                id: 0,
                username: "averagebit",
            },
            content: "you can't say that...",
        },
        {
            user: {
                id: 0,
                username: "averagebit",
            },
            content: "bash is better",
        },
    ],
};
