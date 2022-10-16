import { Suspense, For, Component, Show } from "solid-js";
import { ChatMessage } from "./ChatMessage";
import { ChannelMessage } from "../shared/interfaces";

type ChatContentProps = {
    messages: ChannelMessage[];
};

export const ChatContent: Component<ChatContentProps> = (
    props: ChatContentProps
) => {
    return (
        <Show when={props.messages.length} fallback={<span>loading content</span>}>
            <div class="flex flex-col h-full overflow-x-auto p-4">
                <For each={props.messages}>
                    {(message) => (
                        <ChatMessage
                            username={message.user.username}
                            content={message.content}
                        />
                    )}
                </For>
            </div>
        </Show>
    );
};

export default ChatContent;
