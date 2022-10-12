import ChatFormAttachments from "./ChatFormAttachments";
import ChatFormInput from "./ChatFormInput";
import ChatFormExpressions from "./ChatFormExpressions";

const ChatForm = () => {
    // TODO: wrap in a form to submit messages
    return (
        <div class="px-4 pb-4">
            <div class="flex flex-row items-center h-12 rounded bg-surface1 w-full px-4">
                <ChatFormAttachments />
                <ChatFormInput />
                <ChatFormExpressions />
            </div>
        </div>
    );
};

export default ChatForm;
