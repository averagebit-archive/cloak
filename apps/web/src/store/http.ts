export const http = {
    getUser: async () => {
        const userRes = await fetch(`https://swapi.dev/api/people/1/`);
        const user = await userRes.json();

        return {
            username: user.name
        }
    },
    getConversation: () =>
        Promise.resolve({
            messages: [
                {
                    user: {
                        id: 1,
                        username: "factor"
                    },
                    content: "JS is the best"
                },
                {
                    user: {
                        id: 0,
                        username: "averagebit"
                    },
                    content: "you can't say that..."
                },
                {
                    user: {
                        id: 0,
                        username: "averagebit"
                    },
                    content: "bash is the best"
                }
            ]
        })
};
