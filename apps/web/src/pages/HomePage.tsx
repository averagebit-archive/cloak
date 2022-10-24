import { Component } from "solid-js";
import { useAuthStore } from "../store/auth";
import { Login } from "../components/Login";

const HomePage: Component = () => {
    const [user] = useAuthStore();
    return (
        <>
            <h1>Welcome, {user.username}</h1>
            <Login />
        </>
    );
};

export default HomePage;
