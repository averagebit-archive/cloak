import {Navigate} from "@solidjs/router";
import {Component} from "solid-js";

const RouteRedirectApp: Component = () => {
    return <Navigate href="/room/@me" />;
};

export default RouteRedirectApp;
