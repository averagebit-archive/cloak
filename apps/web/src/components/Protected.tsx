import { Component, Show } from "solid-js";
import { Outlet } from "@solidjs/router";
import LoginPage from "../pages/LoginPage";
import { useAuthStore } from "../store/auth";

const Protected: Component = () => {
    const [user] = useAuthStore();

    return (
        <Show when={user.token} fallback={<LoginPage />}>
            <Outlet />
        </Show>
    );
};

export default Protected;
