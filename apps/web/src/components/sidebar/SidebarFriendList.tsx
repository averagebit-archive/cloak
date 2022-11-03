import {
    createEffect,
    createResource,
    For,
    from,
    Show
} from "solid-js";
import { http, mockFriends2 } from "../../http";
import { useChatStore } from "../../pages/ChatPage";
import SidebarFriend from "./SidebarFriend";
import EmptyFriends from "./EmptyFriends";
import { Modals } from "../modals/Modal";
import { myObservable } from "../modals/FriendAddModalView";

// TODO: find a better place to have this declared
export type Friend = {
    id: number;
    name: string;
};

const SidebarFriendList = () => {
    const [chatStore, actions] = useChatStore();
    const [friendsResource, {mutate}] = createResource<Friend[]>(
        http.Channel.fetchFriends,
        {
            initialValue: []
        }
    );

    // const sig = from(myObservable);

    createEffect((prev) => {
        if (myObservable) {
            debugger
            // TODO: when API available set this refetch();
           mutate(mockFriends2);
        }
    });

    return (
        <Show
            when={!friendsResource.loading}
            fallback={<span>Loading</span>}
            keyed
        >
            <div
                class="flex flex-col h-full space-y-1 overflow-y-auto pt-2 px-4">
                <For
                    each={friendsResource()}
                    fallback={EmptyFriends}
                >
                    {(friend: any) => (
                        <SidebarFriend
                            active={
                                chatStore.activeChatChannelID ===
                                friend.id
                            }
                            name={friend.name}
                            click={() =>
                                actions.setActiveChannel(friend.id)
                            }
                        />
                    )}
                </For>
            </div>
        </Show>
    );
};

export default SidebarFriendList;
