import {Component} from "solid-js/types/render/component";
import {createRouteData, Title} from "solid-start";
import Chat from "~/components/chat/Chat";
import Modal from "~/components/modals/Modal";
import Sidebar from "~/components/sidebar/Sidebar";
import {useRoomContext} from "~/context";
import {http} from "~/services";

export const routeData = () => {
    const friends = createRouteData(
        async () => {
            const [, actions] = useRoomContext();
            const friends = await http.Channel.fetchFriends();
            actions.setFriends(friends);
            return friends;
        },
        {key: ["friends"]}
    );

    return {friends};
};

const RouteMe: Component = () => {
    const [store, actions] = useRoomContext();
    return (
        <>
            <Title>Cloak | Friends</Title>
            <div class="flex flex-row h-full w-full overflow-x-hidden antialiased bg-base text-text">
                <Modal
                    modalType={store.showModal}
                    close={actions.closeModal}
                />
                <Sidebar />
                <Chat />
            </div>
        </>
    );
};

export default RouteMe;
