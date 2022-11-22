import {Component, createComputed, For, Show} from "solid-js";
import SidebarFriend from "./SidebarFriend";
import EmptyFriends from "./EmptyFriends";
import {useRoomContext} from "~/context";
import {useRouteData} from "solid-start";
import {FriendType} from "~/services";
import {MeRouteData} from "~/routes/room/[space_id]";
import {useNavigate, useParams} from "@solidjs/router";

const SidebarFriendList: Component = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [chatStore, actions] = useRoomContext();
    const {friendsResource} = useRouteData<MeRouteData>();
    createComputed(friendsResource);

    return (
        <Show
            when={!friendsResource.loading && chatStore.friends}
            fallback={<span>Loading</span>}
            keyed
        >
            <div class="flex flex-col h-full space-y-1 overflow-y-auto pt-2 px-4">
                <For
                    each={chatStore.friends}
                    fallback={<EmptyFriends />}
                >
                    {(friend: FriendType) => (
                        <SidebarFriend
                            active={chatStore.activeRoomID === friend.id}
                            name={friend.name}
                            click={() => {
                                actions.setActiveRoom(friend.id);
                                navigate(`/room/${params.space_id}/${friend.id}`);
                            }}
                        />
                    )}
                </For>
            </div>
        </Show>
    );
};

export default SidebarFriendList;
