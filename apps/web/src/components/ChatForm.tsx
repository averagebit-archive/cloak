import ChatFormAttachments from "./ChatFormAttachments";
import ChatFormInput from "./ChatFormInput";
import ChatFormExpressions from "./ChatFormExpressions";

const ChatForm = () => {
    // TODO: wrap in a form to submit messages
    return (
        <div class="px-4 pb-4">
            <div class="flex flex-row items-center w-full rounded-md h-12 px-4 bg-surface1">
                <ChatFormAttachments />
                <ChatFormInput />
                <ChatFormExpressions />
            </div>
        </div>
    );
};

export default ChatForm;
