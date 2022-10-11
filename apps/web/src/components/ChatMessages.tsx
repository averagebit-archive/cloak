import ChatMessage from "./ChatMessage";

const ChatMessages = () => {
    return (
        <div class="flex flex-col h-full overflow-x-auto mb-4">
            <div class="flex flex-col h-full">
                <div class="grid grid-cols-12 gap-y-2">
                    <ChatMessage
                        message="Hey How are you today?"
                        isSender={true}
                    />
                    <ChatMessage message="I'm ok what about you?" />
                </div>
            </div>
        </div>
    );
};

export default ChatMessages;
