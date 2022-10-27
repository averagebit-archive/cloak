import { createResource, For, Show } from "solid-js";
import { http } from "../../http";
import { useChatStore } from "../../pages/ChatPage";
import SidebarFriend from "./SidebarFriend";
import EmptyFriends from "./EmptyFriends";

type Friend = {
    id: number,
    name: string
}

const SidebarFriendList = () => {
    const [chatStore, actions] = useChatStore();
    const [friendsResource] = createResource<Friend[]>(http.Channel.fetchFriends, {
        initialValue: []
    });

    return (
        <Show when={!friendsResource.loading} fallback={<span>Loading</span>} keyed>
            <div class="flex flex-col h-full space-y-1 overflow-y-auto pt-2 px-4">
                <For each={friendsResource()} fallback={EmptyFriends}>
                    {(friend: any) => <SidebarFriend active={chatStore.activeChatChannelID === friend.id}
                                                     name={friend.name}
                                                     click={() => actions.setActiveChannel(friend.id)} />}
                </For>
            </div>
        </Show>
    );
};

export default SidebarFriendList;
