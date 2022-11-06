import {Component} from "solid-js";
import {Navigate} from "@solidjs/router";

const RouteRedirectSpace: Component = () => {
    return <Navigate href="/room/@me" />;
};

export default RouteRedirectSpace;
