import ChatHeader from "./ChatHeader";
import ChatContent from "./ChatContent";
import ChatForm from "./ChatForm";
import { useStore } from "../store";

const Chat = () => {
    const [state, actions] = useStore();
    actions.channel.updateChannel();

    return (
        <div class="flex flex-col flex-auto flex-shrink-0 h-full bg-surface0">
            <ChatHeader username="username" />
            <ChatContent messages={state.channel.messages} />
            <ChatForm />
        </div>
    );
};

export default Chat;
