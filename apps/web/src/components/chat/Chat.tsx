import {Component, createComputed, Show} from "solid-js";
import ChatHeader from "./ChatHeader";
import ChatForm from "./ChatForm";
import ChatContent from "./ChatContent";
import {useRoomContext} from "~/context";
import {useRouteData} from "solid-start";
import {RouteMeRoomData} from "~/routes/room/[space_id]/[room_id]";

const Chat: Component = () => {
    const [state] = useRoomContext();
    const {friendsResource, roomResource} = useRouteData<RouteMeRoomData>();

    if (friendsResource) {
        createComputed(friendsResource);
    }

    if (roomResource) {
        createComputed(roomResource);
    }

    return (
        <div class="flex flex-col flex-auto flex-shrink-0 h-full bg-surface0">
            <Show
                when={!friendsResource.loading && !roomResource?.loading && state.room}
                keyed
            >
                <ChatHeader />
                <ChatContent messages={state.room ? state.room.messages : []} />
                <ChatForm />
            </Show>
        </div>
    );
};

export default Chat;
