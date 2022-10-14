import { lazy } from "solid-js";
import { RouteDefinition } from "@solidjs/router";
import { useStore } from "../store";

function PageData({ params, location, navigate, data }) {
    const [store, actions] = useStore();
    actions.user.login();
    return store;
}

const routes: RouteDefinition[] = [
    {
        path: "/",
        data: PageData,
        component: lazy(() => import("../pages/HomePage"))
    },
    {
        path: "/app",
        data: PageData,
        component: lazy(() => import("../pages/ChatPage"))
    }
];

export { routes };

export default routes;
