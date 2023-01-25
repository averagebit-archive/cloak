import { useNavigate } from "@solidjs/router";
import { Component, createEffect, createSignal } from "solid-js";
import { isServer } from "solid-js/web";
import { Title } from "solid-start";
import createWebsocket from "@solid-primitives/websocket";
import { grpc } from "@improbable-eng/grpc-web";

import { CloakServiceClientImpl, GrpcWebImpl } from "../../generated/cloak_service";
import Input from "~/components/common/Input";
import { Button } from "~/components/common/Button";

const RouteHome: Component = () => {
    const [value, setValue] = createSignal(3);
    const navigate = useNavigate();

    if (!isServer) {
        const transport = grpc.CrossBrowserHttpTransport({ withCredentials: false });
        const rpc = new GrpcWebImpl('http://localhost:8080', {
            debug: false,
            metadata: new grpc.Metadata({}),
            transport
        });

        const client = new CloakServiceClientImpl(rpc);
        client.GetCurrentTime({}).then((res) => {
            console.log(res);
        });

        const [connect, disconnect, send, state, socket] = createWebsocket(
            "ws://localhost:5000/ws",
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
