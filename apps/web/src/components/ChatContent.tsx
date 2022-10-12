import ChatMessage from "./ChatMessage";

const ChatContent = () => {
    const sender = { name: "factor" };
    const recipient = { name: "averagebit" };

    return (
        <div class="flex flex-col h-full overflow-x-auto mb-4 px-4">
            <div class="flex flex-col h-full">
                <div class="grid grid-cols-12 gap-y-2">
                    <ChatMessage user={sender} message="js is the best" />
                    <ChatMessage user={recipient} message="bash is better" />
                </div>
            </div>
        </div>
    );
};

export default ChatContent;
