import { Component } from "solid-js";
import { User } from "./User";

export type ChatMessage = {
    user: User;
    content: string;
};

export const ChatMessage: Component<{ user: User; content: string }> = (
    props
) => {
    return (
        // TODO: append to last message if the user is the same
        <div class="flex flex-row items-center pb-4">
            <div class="flex flex-shrink-0 items-center justify-center h-10 w-10 font-semibold text-white rounded-full bg-overlay0">
                {props.user.username[0].toUpperCase()}
            </div>
            <div class="flex flex-col">
                <span class="ml-4 font-medium text-white">
                    {props.user.username}
                </span>
                <div class="ml-4 text-subtext1">{props.content}</div>
            </div>
        </div>
    );
};

export default ChatMessage;
