import {Component, createEffect, onCleanup, Resource} from "solid-js";
import {createRouteData, Title, useRouteData} from "solid-start";
import Modal from "~/components/modals/Modal";
import Sidebar from "~/components/sidebar/Sidebar";
import {useRoomContext} from "~/context";
import {Friend, FriendType, http} from "~/services";
import MainView from "~/components/MainView";

export type MeRouteData = {
    friendsResource: Resource<FriendType[]>;
};

export const routeData = () => {
    const friendsResource = createRouteData<FriendType[], unknown>(
        async () => {
            const data = await http.getFriends();
            Friend.array().parse(data);
            return data;
        },
        {key: ["friends"]}
    );

    return {friendsResource};
};

const RouteMe: Component = () => {
    return <MainView />;
};

export default RouteMe;
