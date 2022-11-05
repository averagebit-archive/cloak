import {Component} from "solid-js";
import ChatHeader from "./ChatHeader";
import ChatForm from "./ChatForm";
import {useAuthContext} from "~/context/auth";

const Chat: Component = () => {
    const [user] = useAuthContext();

    return (
        <div class="flex flex-col flex-auto flex-shrink-0 h-full bg-surface0">
            <ChatHeader username={user.username} />
            {/* <ChatContent messages={} /> */}
            <ChatForm />
        </div>
    );
};

export default Chat;
