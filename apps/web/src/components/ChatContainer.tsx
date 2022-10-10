import ChatArea from "./ChatArea";
import ChatMessageInput from "./ChatMessageInput";

const ChatContainer = () => {
    return (
        <main class="flex flex-col flex-auto h-full p-6">
            <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                <ChatArea />
                <ChatMessageInput />
            </div>
        </main>
    );
};

export default ChatContainer;