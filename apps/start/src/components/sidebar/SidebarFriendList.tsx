import {Component, createResource, For, Show} from "solid-js";
import SidebarFriend from "./SidebarFriend";
import EmptyFriends from "./EmptyFriends";
import {useRoomContext} from "~/context";
import {useRouteData} from "solid-start";

// TODO: find a better place to have this declared
export type Friend = {
    id: number;
    name: string;
};

const SidebarFriendList: Component = () => {
    const [chatStore, actions] = useRoomContext();
    const {friends} = useRouteData();
    // console.log(friends());

    return (
        <Show
            when={!friends.loading}
            fallback={<span>Loading</span>}
            keyed
        >
            <div class="flex flex-col h-full space-y-1 overflow-y-auto pt-2 px-4">
                <For
                    each={friends()}
                    fallback={EmptyFriends}
                >
                    {(friend: any) => (
                        <SidebarFriend
                            active={
                                chatStore.activeRoomID === friend.id
                            }
                            name={friend.name}
                            click={() =>
                                actions.setActiveRoom(friend.id)
                            }
                        />
                    )}
                </For>
            </div>
        </Show>
    );
};

export default SidebarFriendList;
