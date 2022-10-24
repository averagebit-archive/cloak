import { Component, createContext, useContext } from "solid-js";
import Sidebar from "../components/sidebar/Sidebar";
import Chat from "../components/chat/Chat";
import { createStore } from "solid-js/store";

export const ChatContext = createContext<any>();
export const createChatStore = (): [any, any] => {
    const [store, setStore] = createStore({}, {
        name: "chat"
    });

    const actions = {};

    return [store, actions];
};
export const useAuthStore = (): any => useContext(ChatContext) as any;

const ChatPage: Component = () => {
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
