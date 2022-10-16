import { Component, Show } from "solid-js";
import { useStore } from "../store";

const HomePage: Component = () => {
    const [{ user }, actions] = useStore();

    return (
        <>
            <h1>HomePage, {user.username}</h1>
            <Show
                when={user.token}
                fallback={
                    <button onClick={() => actions.user.login()}>Login</button>
                }
                keyed>
                <button onClick={() => actions.user.logout()}>Logout</button>
            </Show>
        </>
    );
};

export default HomePage;
