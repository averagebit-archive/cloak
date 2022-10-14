import { Component } from "solid-js";
import { useRouteData } from "@solidjs/router";

const HomePage: Component = () => {
    const store: any = useRouteData();
    return <h1>Home, {store.user() && store.user().username}</h1>;
};

export default HomePage;
