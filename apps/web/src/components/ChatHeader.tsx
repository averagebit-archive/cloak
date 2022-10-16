import { Suspense } from "solid-js";
import { useStore } from "../store";

const ChatHeader = () => {
    const [state] = useStore();

    return (
        <div class="flex items-center border-b-2 border-b-base p-4">
            <span class="mr-2 font-semibold text-lg text-subtext0">@</span>
            <Suspense fallback={<span>loading content</span>}>
                <span class="font-semibold text-lg">
                    {state.channel() && state.channel()?.users[0].username}
                </span>
            </Suspense>
        </div>
    );
};

export default ChatHeader;
