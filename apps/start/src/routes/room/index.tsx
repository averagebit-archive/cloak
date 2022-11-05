import {Navigate} from "@solidjs/router";
import {Component} from "solid-js/types/render/component";

const RouteRedirectSpace: Component = () => {
    return <Navigate href="/room/@me" />;
};

export default RouteRedirectSpace;
