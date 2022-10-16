import { Router, useRoutes } from "@solidjs/router";
import { Auth } from "./components/Auth";
import routes from "./router";
import { MainContext, initStore } from "./store";


export const App = () => {
    const Routes = useRoutes(routes);
    const [state, actions ] = initStore();

    return (
        <MainContext.Provider value={[state, actions]}>
            <Auth>
                <Router>
                    <Routes />
                </Router>
            </Auth>
        </MainContext.Provider>
    );
};
