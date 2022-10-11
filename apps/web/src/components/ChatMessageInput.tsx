import AttachmentInput from "./AttachmentInput";
import MessageInput from "./MessageInput";
import MessageSendInput from "./MessageSendInput";

const ChatMessageInput = () => {
    // TODO: wrap in a form to submit messages
    return (
        <div class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
            <AttachmentInput />
            <MessageInput />
            <MessageSendInput />
        </div>
    );
};

export default ChatMessageInput;
