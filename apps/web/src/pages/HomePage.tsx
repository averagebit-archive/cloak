import { Component,  Show } from "solid-js";
import { createUserActions, useUserStore } from "../store/auth";

const HomePage: Component = () => {
    const [user, actions] = useUserStore();
    const [userResource, { login, logout }] = createUserActions([user, actions]);

    return (
        <>
            <h1>Welcome, {user.username}</h1>
            <Show
                when={user.token}
                fallback={<button onClick={() => login()}>Login</button>}
                keyed>
                <button onClick={() => logout()}>Logout</button>
            </Show>
            {JSON.stringify(user)} <br/>
            {JSON.stringify(userResource())}
        </>
    );
};

export default HomePage;
