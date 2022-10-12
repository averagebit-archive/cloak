const ChatMessage = (props) => {
    const currentUser = { name: "averagebit" };

    return (
        // TODO: append to last message if the user is the same
        <div class="flex flex-row items-center pb-4">
            <div class="flex flex-shrink-0 items-center justify-center h-10 w-10 rounded-full bg-overlay0">
                {props.user.name[0].toUpperCase()}
            </div>
            <div class="flex flex-col">
                <span class="ml-4 font-medium text-white">
                    {props.user.name}
                </span>
                <div class="ml-4 text-subtext1">{props.message}</div>
            </div>
        </div>
    );
};

export default ChatMessage;
