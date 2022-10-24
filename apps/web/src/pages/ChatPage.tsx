import { Component, createContext, createResource, useContext } from "solid-js";
import Sidebar from "../components/sidebar/Sidebar";
import Chat from "../components/chat/Chat";
import { createStore } from "solid-js/store";
import { http } from "../http";

export const ChatContext = createContext<any>();
export const createChatStore = (): [any, any] => {
    const [store, setStore] = createStore({}, {
        name: "chat"
    });

    const actions = {};

    return [store, actions];
};
export const useChatStore = (): any => useContext(ChatContext) as any;

const ChatPage: Component = () => {
    // const [user, actions] = useChatStore();
    // const [friendsResource] = createResource(http.Auth.user);


    return (
        <ChatContext.Provider value={createChatStore()}>
            <div class="flex flex-row h-full w-full overflow-x-hidden antialiased bg-base text-text">
                <Sidebar />
                <Chat />
            </div>
        </ChatContext.Provider>
    );
};

export default ChatPage;
