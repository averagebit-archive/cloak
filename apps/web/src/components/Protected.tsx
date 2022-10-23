import { Component, Show } from "solid-js";
import { Outlet } from "@solidjs/router";
import LoginPage from "../pages/LoginPage";
import { useUserStore } from "../store/auth";

const Protected: Component = () => {
    const [user] = useUserStore();

    return (
        <Show when={user.token} fallback={<LoginPage />}>
            <Outlet />
        </Show>
    );
};

export default Protected;
