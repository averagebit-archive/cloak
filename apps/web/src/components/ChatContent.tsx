import { Suspense, For } from "solid-js";
import { ChatMessage } from "./ChatMessage";
import { ChannelMessage } from "../shared/interfaces";
import { useStore } from "../store";

export const ChatContent = () => {
    const [state] = useStore();

    return (
        <Suspense fallback={<span>loading content</span>}>
            <div class="flex flex-col h-full overflow-x-auto p-4">
                <For each={state.channel && state.channel()?.messages}>
                    {(message: ChannelMessage) => (
                        <ChatMessage
                            username={message.user.username}
                            content={message.content}
                        />
                    )}
                </For>
            </div>
        </Suspense>
    );
};

export default ChatContent;
