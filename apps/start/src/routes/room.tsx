import {Outlet} from "@solidjs/router";
import {Component} from "solid-js/types/render/component";

const LayoutSpaces: Component = () => {
    return (
        <>
            <div class="flex flex-row h-full w-full overflow-x-hidden antialiased bg-base text-text">
                <Outlet />
            </div>
        </>
    );
};

export default LayoutSpaces;
