import { Router, useRoutes } from "@solidjs/router";
import { Auth } from "./components/Auth";
import routes from "./router";
import { initStore } from "./store";
import { createContext } from "solid-js";

export const Context = createContext();

export const App = () => {
    const Routes = useRoutes(routes);
    const [state, actions] = initStore();

    return (
        <Context.Provider value={[state, actions]}>
            <Auth>
                <Router>
                    <Routes />
                </Router>
            </Auth>
        </Context.Provider>
    );
};
