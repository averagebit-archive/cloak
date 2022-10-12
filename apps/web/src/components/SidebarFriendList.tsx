import SidebarFriend from "./SidebarFriend";

const SidebarFriendList = () => {
    return (
        <div class="flex flex-col h-full overflow-y-auto pt-2 px-4">
            <SidebarFriend active={true} name="factor" />
            <SidebarFriend name="prime" />
        </div>
    );
};

export default SidebarFriendList;
