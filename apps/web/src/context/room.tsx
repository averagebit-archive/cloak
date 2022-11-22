import {createContext, createSignal, JSX, useContext} from "solid-js";
import {createStore} from "solid-js/store";
import {ModalTypes} from "~/components/modals/Modal";
import {FriendType, RoomType} from "~/services";
import room from "~/routes/room";

type RoomStore = {
    activeRoomID: number;
    showModal: ModalTypes | null;
    friends: FriendType[];
    room: RoomType | null;
};

type RoomStoreActions = {
    setRoom: (room: RoomType) => void;
    setActiveRoom: (id: number) => void;
    openModal: (modal: ModalTypes) => void;
    closeModal: () => void;
    setFriends: (friends: FriendType[]) => void;
};

type RoomContext = [RoomStore, RoomStoreActions];

const RoomContext = createContext<RoomContext>();

const RoomProvider = (props: {children: JSX.Element}): JSX.Element => {
    const [store, setStore] = createStore<RoomStore>({
        room: null,
        activeRoomID: 0,
        showModal: null,
        friends: [],
    });

    const actions: RoomStoreActions = {
        setRoom: (room) => {
            setStore("room", room);
        },
        setFriends: (friends) => {
            setStore("friends", friends);
        },
        setActiveRoom: (id) => {
            setStore("activeRoomID", id);
        },
        openModal: (modal) => {
            setStore("showModal", modal);
        },
        closeModal: () => {
            setStore("showModal", null);
        },
    };

    return (
        <RoomContext.Provider
            children={props.children}
            value={[store, actions]}
        />
    );
};

const useRoomContext = (): RoomContext => {
    return useContext(RoomContext) as RoomContext;
};

export {RoomProvider, useRoomContext};
