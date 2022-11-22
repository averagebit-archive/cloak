import {Component, createEffect, For, Show} from "solid-js";
import {MessageType} from "~/services";
import {ChatMessage} from "./ChatMessage";

type ChatContentProps = {
    messages: MessageType[];
};

export const ChatContent: Component<ChatContentProps> = (
    props: ChatContentProps
) => {
    return (
        <Show
            when={props.messages.length}
            fallback={<span>loading content</span>}
            keyed
        >
            <div class="flex flex-col h-full overflow-x-auto p-4">
                <For each={props.messages}>
                    {(message) => (
                        <ChatMessage
                            name={message.user.name}
                            content={message.content}
                        />
                    )}
                </For>
            </div>
        </Show>
    );
};

export default ChatContent;
