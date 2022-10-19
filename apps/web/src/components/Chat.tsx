import ChatHeader from "./ChatHeader";
import ChatContent from "./ChatContent";
import ChatForm from "./ChatForm";

const Chat = () => {
    return (
        <div class="flex flex-col flex-auto flex-shrink-0 h-full bg-surface0">
            <ChatHeader username="username" />
            {/* <ChatContent messages={} /> */}
            <ChatForm />
        </div>
    );
};

export default Chat;
