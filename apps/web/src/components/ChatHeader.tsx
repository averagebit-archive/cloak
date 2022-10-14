import { useStore } from "../store";

const ChatHeader = () => {
    const [store] = useStore();

    return (
        <div class="flex items-center border-b-2 border-b-base p-4">
            <span class="mr-2 font-semibold text-lg text-subtext0">@</span>
            <span class="font-semibold text-lg">{store.user().username}</span>
        </div>
    );
};

export default ChatHeader;
