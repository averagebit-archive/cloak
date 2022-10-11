import ChatFormAttachment from "./ChatFormAttachment";
import ChatFormButton from "./ChatFormButton";
import ChatFormInput from "./ChatFormInput";

const ChatForm = () => {
    // TODO: wrap in a form to submit messages
    return (
        <div class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
            <ChatFormAttachment />
            <ChatFormInput />
            <ChatFormButton />
        </div>
    );
};

export default ChatForm;
