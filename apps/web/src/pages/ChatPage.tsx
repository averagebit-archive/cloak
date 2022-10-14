import { Component, createEffect, Show } from "solid-js";

import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import { useRouteData } from "@solidjs/router";

const ChatPage: Component = () => {
    const store: any = useRouteData();

    return (
        <div>
            <Show when={store.user()} fallback={<div>No User</div>}>
                <div class="flex flex-row h-full w-full overflow-x-hidden antialiased bg-base text-text">
                    <Sidebar />
                    <Chat />
                </div>
            </Show>
        </div>
    );
};

export default ChatPage;
