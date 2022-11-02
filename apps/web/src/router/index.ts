import {lazy} from "solid-js";
import {RouteDefinition} from "@solidjs/router";

const routes: RouteDefinition[] = [
    {
        path: "/",
        component: lazy(() => import("../pages/HomePage")),
    },
    {
        path: "/app",
        component: lazy(() => import("../components/Protected")),
        children: [
            {
                path: "/",
                component: lazy(() => import("../pages/ChatPage")),
            },
        ],
    },
    {
        path: "*",
        component: lazy(() => import("../pages/NotFound")),
    },
];

export {routes};

export default routes;
