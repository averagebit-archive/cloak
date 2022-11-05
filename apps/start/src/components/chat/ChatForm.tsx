import {Component} from "solid-js";
import ChatFormAttachments from "./ChatFormAttachments";
import ChatFormExpressions from "./ChatFormExpressions";
import ChatFormInput from "./ChatFormInput";

const ChatForm: Component = () => {
    // TODO: wrap in a form to submit messages
    return (
        <div class="px-4 pb-4">
            <div class="flex flex-row items-center w-full rounded-md h-12 px-4 bg-surface1">
                <ChatFormAttachments />
                <ChatFormInput />
                <ChatFormExpressions />
            </div>
        </div>
    );
};

export default ChatForm;
