import { For } from "solid-js";
import { User } from "./User";
import { ChatMessage } from "./ChatMessage";
import { useStore } from "../store";

export type ChatConversation = {
    user: User;
    messages: ChatMessage[];
};

export const ChatContent = () => {
    const [store] = useStore();

    return (
        <div class="flex flex-col h-full overflow-x-auto p-4">
            <For each={store.conversation().messages}>
                {(message: ChatMessage) => (
                    <ChatMessage
                        user={message.user}
                        content={message.content}
                    />
                )}
            </For>
        </div>
    );
};

export default ChatContent;
