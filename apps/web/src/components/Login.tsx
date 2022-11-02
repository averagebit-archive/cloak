import {useAuthStore, useResource} from "../store/auth";
import {createSignal, Show} from "solid-js";
import {Button} from "./common/Button";

export const Login = () => {
    const [user, actions] = useAuthStore();
    const [authenticated, setAuthenticated] = createSignal(false);
    const [userResource] = useResource(authenticated);

    return (
        <Show
            when={!user.token}
            fallback={
                <Button
                    text="Logout"
                    isLoading={userResource.loading}
                    callback={() => {
                        actions.setUser(false);
                        setAuthenticated(false);
                    }}
                />
            }
            keyed
        >
            <Button
                text="Login"
                isLoading={userResource.loading}
                callback={() => setAuthenticated(true)}
            />
        </Show>
    );
};
