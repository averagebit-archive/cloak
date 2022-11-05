import {Component} from "solid-js";

const ChatFormInput: Component = () => {
    return (
        <input
            type="text"
            class="flex flex-grow w-full focus:outline-none px-4 h-10 bg-surface1"
        />
    );
};

export default ChatFormInput;
