import ChatMessages from "./ChatMessages";
import ChatForm from "./ChatForm";

const Chat = () => {
    return (
        <main class="flex flex-col flex-auto h-full p-6">
            <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                <ChatMessages />
                <ChatForm />
            </div>
        </main>
    );
};

export default Chat;
