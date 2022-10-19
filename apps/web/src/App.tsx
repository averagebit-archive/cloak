import { Router, useRoutes } from "@solidjs/router";
import { Auth } from "./components/Auth";
import routes from "./router";
import { AuthContext, createAuth } from "./store/auth";

export const App = () => {
    const Routes = useRoutes(routes);

    return (
        <AuthContext.Provider value={createAuth()}>
            <Auth>
                <Router>
                    <Routes />
                </Router>
            </Auth>
        </AuthContext.Provider>
    );
};
