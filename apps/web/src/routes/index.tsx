import { useNavigate } from "@solidjs/router";
import { Component, createEffect, createSignal, onMount } from "solid-js";
import { Title } from "solid-start";
import Input from "~/components/common/Input";
import { Button } from "~/components/common/Button";
import createWebsocket from "@solid-primitives/websocket";
import { isServer } from "solid-js/web";

const RouteHome: Component = () => {
    const [value, setValue] = createSignal(3);
    const navigate = useNavigate();

    if (!isServer) {
        const [connect, disconnect, send, state, socket] = createWebsocket(
            "ws://localhost:5000/api/ws",
            (msg) => {
                console.log(msg);
            },
            (msg) => {
                console.log(msg);
            },
            [],
            5,
            5000
        );

        setValue(state()); // 3
        connect();

        createEffect(() => {
            setValue(state()); // 0 or 1
        });
    }

    return (
        <main class="h-screen flex justify-center items-center">
            <Title>Cloak</Title>
            <span>Data: {value()}</span>
            <div class="flex flex-col p-32 rounded bg-surface0 items-center">
                <Input />
                <Button
                    text="Login"
                    callback={() => navigate("/app")}
                />
            </div>
        </main>
    );
};

export default RouteHome;
