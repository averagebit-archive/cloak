export const http = {
    getUser: () =>
        Promise.resolve({
            id: 0,
            username: "averagebit",
        }),
    getConversation: () =>
        Promise.resolve({
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
                    content: "bash is the best",
                },
            ],
        }),
};
