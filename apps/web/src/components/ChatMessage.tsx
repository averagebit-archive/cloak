import { Show } from "solid-js";
import ChatMessageSender from "./ChatMessageSender";
import ChatMessageRecipient from "./ChatMessageRecipient";

const ChatMessage = (props) => {
    return (
        <Show
            when={props.isSender}
            fallback={<ChatMessageRecipient message={props.message} />}
        >
            <ChatMessageSender message={props.message} />
        </Show>
    );
};

export default ChatMessage;
