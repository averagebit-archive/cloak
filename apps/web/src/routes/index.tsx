import { useNavigate } from "@solidjs/router";
import { Component, createEffect, createSignal } from "solid-js";
import { isServer } from "solid-js/web";
import { Title, createRouteData, useRouteData } from "solid-start";
import createWebsocket from "@solid-primitives/websocket";

import client from "~/services/transport";
import LoginForm from "~/components/common/LoginForm";

// export function routeData() {
//     return createRouteData(async () => {
//         const val = await client.echo({ value: "I feel happy." });
//         console.log(val.value);
//         return {
//             message: val.value
//         };
//     });
// }

const RouteHome: Component = () => {
    const [value, setValue] = createSignal(3);

    if (!isServer) {
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
    }

    return (
        <main class="h-screen flex justify-center items-center">
            <Title>Cloak</Title>
            <span>Data: {value()}</span>
            <LoginForm redirectTo={"/room/@me"}/>
        </main>
    );
};

export default RouteHome;
