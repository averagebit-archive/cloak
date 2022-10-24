import ChatHeader from "./ChatHeader";
import ChatForm from "./ChatForm";
import { useAuthStore } from "../../store/auth";

const Chat = () => {
    const [user] = useAuthStore();

    return (
        <div class="flex flex-col flex-auto flex-shrink-0 h-full bg-surface0">
            <ChatHeader username={user.username} />
            {/* <ChatContent messages={} /> */}
            <ChatForm />
        </div>
    );
};

export default Chat;
