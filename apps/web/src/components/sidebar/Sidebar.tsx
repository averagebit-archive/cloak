import {Component} from "solid-js";
import SidebarHeader from "./SidebarHeader";
import SidebarFriendList from "./SidebarFriendList";

const Sidebar: Component = () => {
    return (
        <div class="flex flex-col flex-shrink-0 w-72 h-full bg-base">
            <SidebarHeader />
            <SidebarFriendList />
        </div>
    );
};

export default Sidebar;
