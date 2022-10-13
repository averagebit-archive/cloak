import { lazy } from "solid-js";
import { RouteDefinition } from "@solidjs/router";

const routes: RouteDefinition[] = [
    {
        path: "/",
        component: lazy(() => import("../pages/HomePage")),
    },
    {
        path: "/app",
        component: lazy(() => import("../pages/ChatPage")),
    },
];

export { routes };

export default routes;
