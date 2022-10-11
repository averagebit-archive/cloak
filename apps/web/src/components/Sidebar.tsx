import SidebarUser from "./SidebarUser";
import SidebarFriends from "./SidebarFriends";

const Sidebar = () => {
    return (
        <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
            <SidebarUser />
            <SidebarFriends />
        </div>
    );
};

export default Sidebar;
