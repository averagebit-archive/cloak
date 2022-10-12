const ChatMessage = (props) => {
    return (
        <div class="col-start-1 col-end-8 py-2 rounded-lg">
            <div class="flex flex-row items-center">
                <div class="flex items-center justify-center h-10 w-10 rounded-full bg-overlay0 flex-shrink-0">
                    {props.user.name[0].toUpperCase()}
                </div>
                <div class="flex flex-col">
                    <span class="ml-4 font-semibold text-text">
                        {props.user.name}
                    </span>
                    <div class="relative ml-4 rounded-xl text-subtext1">
                        <div>{props.message}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;
