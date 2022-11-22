import {Component, createEffect} from "solid-js";
import {Title, useRouteData} from "solid-start";
import Modal from "~/components/modals/Modal";
import Sidebar from "~/components/sidebar/Sidebar";
import Chat from "~/components/chat/Chat";
import {useRoomContext} from "~/context";
import {RouteMeRoomData} from "~/routes/room/[space_id]/[room_id]";

const MainView: Component = () => {
    const [state, actions] = useRoomContext();
    const {friendsResource, roomResource} = useRouteData<RouteMeRoomData>();

    createEffect(() => {
        if (roomResource && !roomResource.loading) {
            actions.setRoom(roomResource() as any);
        }
    });

    createEffect(() => {
        if (friendsResource && !friendsResource.loading) {
            actions.setFriends(friendsResource() as any);
        }
    });

    return (
        <>
            <Title>Cloak | @{state.room && state.room.name}</Title>
            <Modal
                modalType={state.showModal}
                close={actions.closeModal}
            />
            <Sidebar />
            <Chat />
        </>
    );
};

export default MainView;
