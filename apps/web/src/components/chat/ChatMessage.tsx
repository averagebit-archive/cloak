import {Component} from "solid-js";

export const ChatMessage: Component<{
    name: string;
    content: string;
}> = (props) => {
    return (
        <div class="flex flex-row items-center pb-4">
            <div class="flex flex-shrink-0 items-center justify-center h-10 w-10 font-semibold text-white rounded-full bg-overlay0">
                {props.name[0].toUpperCase()}
            </div>
            <div class="flex flex-col">
                <span class="ml-4 font-medium text-white">
                    {props.name}
                </span>
                <div class="ml-4 text-subtext1">{props.content}</div>
            </div>
        </div>
    );
};

export default ChatMessage;
