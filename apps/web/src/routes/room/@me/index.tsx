import {Component} from "solid-js";
import {createRouteData, Title} from "solid-start";
// import Chat from "~/components/chat/Chat";
import Modal from "~/components/modals/Modal";
import Sidebar from "~/components/sidebar/Sidebar";
import {useRoomContext} from "~/context";
import {http} from "~/services";

export const routeData = () => {
    const [, actions] = useRoomContext();

    const friends = createRouteData(
        async () => {
            const friendsRes = await http.getFriends();
            Friend.array().parse(friendsRes);
            actions.setFriends(friendsRes);
            return friendsRes;
        },
        {key: ["friends"]}
    ) as any;

    actions.setFriends(friends());
    return {friends};
};

const RouteMe: Component = () => {
    const [state, actions] = useRoomContext();

    return (
        <>
            <Title>Cloak | Friends</Title>
            <div
                class="flex flex-row h-full w-full overflow-x-hidden antialiased bg-base text-text">
                <Modal
                    modalType={state.showModal}
                    close={actions.closeModal}
                />
                <Sidebar />
                <span>friend list</span>
                {/* <Chat /> */}
            </div>
        </>
    );
};

export default RouteMe;
