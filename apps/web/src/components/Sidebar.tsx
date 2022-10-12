import SidebarHeader from "./SidebarHeader";
import SidebarFriendAdd from "./SidebarFriendAdd";
import SidebarFriendList from "./SidebarFriendList";

const Sidebar = () => {
    return (
        <div class="flex flex-col w-64 bg-base flex-shrink-0">
            <SidebarHeader />
            <SidebarFriendAdd />
            <SidebarFriendList />
        </div>
    );
};

export default Sidebar;
