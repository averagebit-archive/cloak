import ChatMessageAttachment from "./ChatMessageAttachment";
import ChatMessageButton from "./ChatMessageButton";
import ChatMessageInput from "./ChatMessageInput";

const ChatMessageForm = () => {
    // TODO: wrap in a form to submit messages
    return (
        <div class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
            <ChatMessageAttachment />
            <ChatMessageInput />
            <ChatMessageButton />
        </div>
    );
};

export default ChatMessageForm;
