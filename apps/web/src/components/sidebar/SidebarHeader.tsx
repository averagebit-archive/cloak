import FriendAdd from "../common/FriendAdd";

const SidebarHeader = () => {
    return (
        <div class="flex justify-between items-center border-b-2 border-b-surface0 p-4">
            <span class="text-lg font-semibold text-subtext0">Friends</span>
            <FriendAdd />
        </div>
    );
};

export default SidebarHeader;
