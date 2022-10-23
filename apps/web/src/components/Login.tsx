import { useUserStore } from "../store/auth";
import { createResource, Show } from "solid-js";
import { http } from "../http";
import { Button } from "./common/Button";

export const Login = () => {
    const [user, actions] = useUserStore();
    const [userResource] = createResource(() => user.authenticated, getUser, { initialValue: user });

    async function getUser() {
        if (!user.authenticated) {
            return user;
        }

        const userRes = await http.Auth.user();
        actions.setUser(userRes);
        return userRes;
    }

    return (
        <Show when={!user.authenticated} fallback={
            <Button text="Logout" isLoading={userResource.loading} callback={() => actions.setUser(false)} />
        } keyed>
            <Button text="Login" isLoading={userResource.loading} callback={actions.setUserAuthenticated} />
        </Show>
    );
};
