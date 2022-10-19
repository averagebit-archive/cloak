import { Component,  Show } from "solid-js";
import { useStore } from "../store";
import { createUserActions } from "../store/auth";

const HomePage: Component = () => {
    const { userStore } = useStore();
    const [user] = userStore;
    const [userResource, { login, logout }] = createUserActions(userStore);

    return (
        <>
            <h1>Welcome, {user.username} </h1>
            <Show
                when={user.token}
                fallback={<button onClick={() => login()}>Login</button>}
                keyed>
                <button onClick={() => logout()}>Logout</button>
            </Show>
            {JSON.stringify(userStore)} <br/>
            {JSON.stringify(userResource())}
        </>
    );
};

export default HomePage;
