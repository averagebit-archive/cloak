import { Component } from "solid-js";
import Sidebar from "../components/sidebar/Sidebar";
import Chat from "../components/chat/Chat";

const ChatPage: Component = () => {
    return (
        <div class="flex flex-row h-full w-full overflow-x-hidden antialiased bg-base text-text">
            <Sidebar />
            <Chat />
        </div>
    );
};

export default ChatPage;
