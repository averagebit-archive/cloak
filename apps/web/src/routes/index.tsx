import { useNavigate } from "@solidjs/router";
import { Component, createEffect, createMemo, createSignal } from "solid-js";
import { isServer } from "solid-js/web";
import { Title } from "solid-start";
import createWebsocket from "@solid-primitives/websocket";
import { createCallbackClient, createConnectTransport } from "@bufbuild/connect-web";

import Input from "~/components/common/Input";
import { Button } from "~/components/common/Button";
import { CloakService } from "../../generated/service_connectweb";

const RouteHome: Component = () => {
    const [value, setValue] = createSignal(3);
    const navigate = useNavigate();

    if (!isServer) {
        const transport = createConnectTransport({
            baseUrl: "http://localhost:8080",
            // By default, connect-web clients use the JSON format.
            // Set this option to true to use the binary format.
            useBinaryFormat: false,

            // Controls what the fetch client will do with credentials, such as
            // Cookies. The default value is "same-origin", which will not
            // transmit Cookies in cross-origin requests.
            credentials: "omit",

            // Interceptors apply to all calls running through this transport.
            interceptors: [],
        });

        const client = createCallbackClient(CloakService, transport);

        client.echo({ value: "I feel happy." }, (err: any, res: any) => {
            if (!err) {
                console.log(res.value);
            } else {
                console.log(err);
            }
        });

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
