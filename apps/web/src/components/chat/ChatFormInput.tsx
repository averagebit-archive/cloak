import {Component, createEffect, onCleanup} from "solid-js";

const ChatFormInput: Component = () => {
    let messageInputRef: HTMLInputElement;

    createEffect(() => {
        window.addEventListener("keydown", onKeyPress);

        onCleanup(() => {
            window.removeEventListener("keydown", onKeyPress);
        });
    });

    function onKeyPress(e: KeyboardEvent) {
        if (e.key === "Enter" && document.activeElement !== messageInputRef) {
            messageInputRef.focus();
        }
    }

    function onSubmit(e: Event) {
        e.preventDefault();
    }

    return (
        <form
            class="flex-grow px-2"
            onSubmit={onSubmit}
        >
            <input
                type="text"
                class="flex flex-grow w-full focus:outline-none px-4 h-10 bg-surface1"
                ref={messageInputRef}
            />
        </form>
    );
};

export default ChatFormInput;
