import { Component } from "solid-js/types/render/component";
import { createRouteData, Title } from "solid-start";
import Chat from "~/components/chat/Chat";
import Modal from "~/components/modals/Modal";
import Sidebar from "~/components/sidebar/Sidebar";
import { useRoomContext } from "~/context";
import { http } from "~/services";

export const routeData = () => {
    const [, actions] = useRoomContext();
    const friends2 = createRouteData(
        async () => {
            const friendsRes = await http.Channel.friends2();
            actions.setFriends(friendsRes);
            return friendsRes;
        },
        { key: ["friends2"] }
    ) as any;

    const friends = createRouteData(
        async () => {
            const friendsRes = await http.Channel.fetchFriends();
            actions.setFriends(friendsRes);
            console.log("inside")
            return friendsRes;
        },
        { key: ["friends"] }
    ) as any;

    actions.setFriends(friends());

    console.log("outside")
    return { friends };
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
