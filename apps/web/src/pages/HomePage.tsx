import { Component } from "solid-js";
import { useUserStore } from "../store/auth";
import { Login } from "../components/Login";

const HomePage: Component = () => {
    const [user] = useUserStore();
    return (
        <>
            <h1>Welcome, {user.username}</h1>
            <Login />
            {JSON.stringify(user)} <br />
        </>
    );
};

export default HomePage;
