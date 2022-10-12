import ChatHeader from "./ChatHeader";
import ChatContent from "./ChatContent";
import ChatForm from "./ChatForm";

const Chat = () => {
    return (
        <main class="flex flex-col flex-auto h-full">
            <div class="flex flex-col flex-auto flex-shrink-0 bg-surface0 h-full">
                <ChatHeader />
                <ChatContent />
                <ChatForm />
            </div>
        </main>
    );
};

export default Chat;
