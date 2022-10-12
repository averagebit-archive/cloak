const ChatHeader = () => {
    const user = { name: "factor" };

    return (
        <div class="flex items-center border-b-2 border-b-base h-14 px-4">
            <span class="mr-2 text-lg text-subtext0">@</span>
            <h5 class="text-lg font-semibold">{user.name}</h5>
        </div>
    );
};

export default ChatHeader;
