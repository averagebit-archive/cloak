import { Component, createContext, useContext } from "solid-js";
import Sidebar from "../components/sidebar/Sidebar";
import Chat from "../components/chat/Chat";
import { createStore } from "solid-js/store";
import Modal from "../components/modals/Modal";

type ChatStore = {
    activeChatChannelID: number;
    showModal: string | null;
};

type ChatStoreActions = {
    setActiveChannel: (id: number) => void;
    openModal: (modal: string) => void;
    closeModal: () => void;
};
export type ChatContext = [ChatStore, ChatStoreActions];

export const ChatContext = createContext<ChatContext>();
export const useChatStore = (): ChatContext => useContext(ChatContext) as ChatContext;

const ChatPage: Component = () => {
    const [store, setStore] = createStore<ChatStore>({
        activeChatChannelID: 0,
        showModal: null
    }, {
        name: "chat"
    });

    const actions: ChatStoreActions = {
        setActiveChannel(id: number) {
            setStore("activeChatChannelID", id);
        },
        openModal(modal: string) {
            setStore("showModal", modal);
        },
        closeModal() {
            setStore("showModal", null);
        }
    };

    return (
        <ChatContext.Provider value={[store, actions]}>
            <div class="flex flex-row h-full w-full overflow-x-hidden antialiased bg-base text-text">
                <Modal modalType={store.showModal} close={actions.closeModal} />
                <Sidebar />
                <Chat />
            </div>
        </ChatContext.Provider>
    );
};

export default ChatPage;
