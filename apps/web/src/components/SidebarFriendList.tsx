import SidebarFriend from "./SidebarFriend";

const SidebarFriendList = () => {
    return (
        <div class="flex flex-col h-full space-y-1 overflow-y-auto pt-2 px-4">
            <SidebarFriend active={true} name="factor" />
            <SidebarFriend name="prime" />
            <SidebarFriend name="some rando" />
        </div>
    );
};

export default SidebarFriendList;
