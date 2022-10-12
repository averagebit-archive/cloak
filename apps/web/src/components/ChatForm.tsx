import ChatFormAttachment from "./ChatFormAttachment";
import ChatFormSubmit from "./ChatFormSubmit";
import ChatFormInput from "./ChatFormInput";

const ChatForm = () => {
    // TODO: wrap in a form to submit messages
    return (
        <div class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
            <ChatFormAttachment />
            <ChatFormInput />
            <ChatFormSubmit />
        </div>
    );
};

export default ChatForm;
