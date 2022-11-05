import {Component, Suspense} from "solid-js";

type ChatHeaderProps = {
    username: string;
};

const ChatHeader: Component<ChatHeaderProps> = (
    props: ChatHeaderProps
) => {
    return (
        <div class="flex items-center border-b-2 border-b-base p-4">
            <span class="mr-2 font-semibold text-lg text-subtext0">
                @
            </span>
            <Suspense fallback={<span>loading content</span>}>
                <span class="font-semibold text-lg">
                    {props.username}
                </span>
            </Suspense>
        </div>
    );
};

export default ChatHeader;
