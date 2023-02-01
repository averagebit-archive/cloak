import { Component, createEffect, createSignal } from "solid-js";
import createWebsocket from "@solid-primitives/websocket";

import LoginForm from "../components/common/LoginForm";

const Home: Component = () => {
    const [value, setValue] = createSignal(3);

    const [connect, disconnect, send, state, socket] = createWebsocket(
        "ws://localhost:8080/ws",
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

    setValue(state());
    connect();

    createEffect(() => {
        setValue(state());

        if (value() === WebSocket.OPEN) {
            send("hello");
        }
    });

    return (
        <main class="h-screen flex justify-center items-center">
            <span>Data: {value()}</span>
            <LoginForm redirectTo={"/room/@me"}/>
        </main>
    );
};

export default Home;
