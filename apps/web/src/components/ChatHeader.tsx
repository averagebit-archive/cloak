const ChatHeader = () => {
    const user = { name: "factor" };

    return (
        <div class="flex items-center border-b-2 border-b-base h-14 px-4">
            <span class="mr-2 font-semibold text-lg text-subtext0">@</span>
            <span class="font-semibold text-lg">{user.name}</span>
        </div>
    );
};

export default ChatHeader;
