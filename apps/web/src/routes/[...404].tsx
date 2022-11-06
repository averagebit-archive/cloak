import {A} from "@solidjs/router";
import {Component} from "solid-js";
import {Title} from "solid-start";
import {HttpStatusCode} from "solid-start/server";

const RouteNotFound: Component = () => {
    return (
        <main>
            <Title>Cloak | Page Not Found</Title>
            <HttpStatusCode code={404} />
            <h1>Page Not Found</h1>
            <A href="/">Home</A>
        </main>
    );
};

export default RouteNotFound;
