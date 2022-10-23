import SidebarHeader from "./SidebarHeader";
import SidebarFriendAdd from "./SidebarFriendAdd";
import SidebarFriendList from "./SidebarFriendList";

const Sidebar = () => {
    return (
        <div class="flex flex-col flex-shrink-0 w-72 h-full bg-base">
            <SidebarHeader />
            <SidebarFriendAdd />
            <SidebarFriendList />
        </div>
    );
};

export default Sidebar;
