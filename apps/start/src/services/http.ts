// TODO: turn into a fetch wrapper, pass state.token with requests
const req = async (
    method: string,
    url: string,
    data: any,
    timeout?: number
) => {
    try {
        const res = await mockRequest(data, timeout);
        console.log("HTTP AGENT", method, url);
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
        fetch: () => req("GET", "/channel", mockChannel, 500),
        fetchFriends: () => req("GET", "/friends", mockFriends, 500),
        friends2: () => req("GET", "/friends", mockFriends2, 500),
        addFriend: (id: string) =>
            req("POST", "/friends", mockFriends2, 500),
    },
};

// mock stuff
const mockRequest = (data: any, timeout?: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data.error) {
                reject(new Error(data.error));
            }
            resolve({data: data});
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

const mockFriends = [
    {
        id: 0,
        name: "factor",
    },
    {id: 1, name: "Theo"},
];

export const mockFriends2 = [
    {
        id: 0,
        name: "factor",
    },
    {id: 1, name: "Theo"},
    {id: 2, name: "Prime"},
];

const mockRoomMessages = [
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
];

const mockRoomUsers = [
    {
        id: 0,
        username: "factor",
    },
    {
        id: 1,
        username: "averagebit",
    },
];

const mockSpaceMe = {
    user: {
        id: 1,
        name: "averagebit",
    },
    friends: [
        {
            id: 0,
            name: "factor",
        },
    ],
    rooms: [
        {
            id: 0,
            users: mockRoomUsers,
            messages: mockRoomMessages,
        },
    ],
};

const mockSpaceAveragebit = {
    owner: {
        id: 1,
        name: "averagebit",
    },
    rooms: [
        {
            id: 0,
            name: "chat",
        },
    ],
    users: mockRoomUsers,
};
