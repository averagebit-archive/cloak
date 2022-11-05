import {Component} from "solid-js";
import { A } from "solid-start";
import FriendAdd from "../common/FriendAdd";

const SidebarHeader: Component = () => {
    return (
        <div class="flex justify-between items-center border-b-2 border-b-surface0 p-4">
            <span class="text-lg font-semibold text-subtext0">
                Friends

            </span>

            <A href="/">App</A>
            <FriendAdd />
        </div>
    );
};

export default SidebarHeader;
