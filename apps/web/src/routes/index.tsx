import {A} from "@solidjs/router";
import {Component} from "solid-js";
import {Title} from "solid-start";

const RouteHome: Component = () => {
    return (
        <main>
            <Title>Cloak</Title>
            <ul>
                <li>
                    <A href="/">Cloak</A>
                </li>
                <li>
                    <A href="/app">App</A>
                </li>
            </ul>
        </main>
    );
};

export default RouteHome;
