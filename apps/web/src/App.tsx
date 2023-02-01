import type { Component } from "solid-js";
import { createResource } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import Home from "./routes/Home";
import client from "./services/transport";

const App: Component = () => {
    const [data, { mutate, refetch }] = createResource(async () => {
        const res = await client.echo({ value: "Hello World" });
        return res.value;
    });

    return <>
        <Routes>
            {/*<Route path="/rooms/:id" component={Users} />*/}
            {/*<Route path="/login" component={Home} />*/}
            <Route path="/" component={Home} />
        </Routes>
    </>;
};

export default App;
