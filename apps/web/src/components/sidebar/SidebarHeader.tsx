import {Component} from "solid-js";
import {A} from "solid-start";
import FriendAdd from "../common/FriendAdd";

const SidebarHeader: Component = () => {
    return (
        <div class="flex justify-between items-center border-b-2 border-b-surface0 p-4">
            <A
                href="/"
                class="text-lg font-semibold text-subtext"
            >
                Cloak
            </A>
            <FriendAdd />
        </div>
    );
};

export default SidebarHeader;
