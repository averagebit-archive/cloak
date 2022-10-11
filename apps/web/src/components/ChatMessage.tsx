import { Show } from "solid-js";
import ChatMessageSender from "./ChatMessageSender";
import ChatMessageRecipient from "./ChatMessageRecipient";

const ChatMessage = (props) => {
    return (
        <Show
            when={props.isSender}
            fallback={
                <>
                    <ChatMessageSender message={props.message} />
                </>
            }
        >
            <ChatMessageRecipient message={props.message} />
        </Show>
    );
};

export default ChatMessage;
