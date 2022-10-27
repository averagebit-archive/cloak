import SidebarHeader from "./SidebarHeader";
import FriendAdd from "../common/FriendAdd";
import SidebarFriendList from "./SidebarFriendList";

const Sidebar = () => {
    return (
        <div class="flex flex-col flex-shrink-0 w-72 h-full bg-base">
            <SidebarHeader />
            <SidebarFriendList />
        </div>
    );
};

export default Sidebar;
