import { Provider } from "./store";
import { Auth } from "./components/Auth";
import { Router, useRoutes } from "@solidjs/router";
import routes from "./router";

export const App = () => {
    const Routes = useRoutes(routes);

    return (
        <Provider>
            <Auth>
                <Router>
                    <Routes />
                </Router>
            </Auth>
        </Provider>
    );
};
