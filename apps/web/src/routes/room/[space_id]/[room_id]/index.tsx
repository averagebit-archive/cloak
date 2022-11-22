import {Component, Resource} from "solid-js";
import {createRouteData, RouteDataArgs} from "solid-start";
import {Friend, FriendType, http, Room, RoomType} from "~/services";
import MainView from "~/components/MainView";

export type RouteMeRoomData = {
    friendsResource: Resource<FriendType[]>;
    roomResource: Resource<RoomType>;
};

export const routeData = ({params}: RouteDataArgs) => {
    const roomCache = new Map();

    const friendsResource = createRouteData<FriendType[], unknown>(
        async () => {
            const data = await http.getFriends();
            Friend.array().parse(data);
            return data;
        },
        {key: ["friends"]}
    );

    const roomResource = createRouteData<RoomType, unknown>(
        async () => {
            const room = `${params.space_id}/${params.room_id}`;

            if (roomCache.has(room)) {
                return roomCache.get(room);
            }

            const data = await http.getRoom(parseInt(params.room_id));
            Room.parse(data);
            roomCache.set(room, {...data});
            return data;
        },
        {key: () => ["room", params.room_id]}
    );
    return {friendsResource, roomResource};
};

const RouteMeRoom: Component = () => {
    return <MainView />;
};

export default RouteMeRoom;
