import { Component, Show } from "solid-js";
import { Outlet } from "@solidjs/router";
import { useStore } from "../store";
import LoginPage from "../pages/LoginPage";

const Protected: Component = () => {
    const [state] = useStore();

    return (
        <Show when={state.token} fallback={<LoginPage />}>
            <Outlet />
        </Show>
    );
};

export default Protected;
