import ChatMessage from "./ChatMessage";

const ChatContent = () => {
    const user1 = { name: "factor" };
    const user2 = { name: "averagebit" };

    return (
        <div class="flex flex-col h-full overflow-x-auto p-4">
            <ChatMessage user={user1} message="js is the best" />
            <ChatMessage user={user2} message="you can't say that..." />
            <ChatMessage user={user2} message="bash is better" />
        </div>
    );
};

export default ChatContent;
