import { useStore } from "../store";

const LoginPage = () => {
    const [, actions] = useStore();

    return (
        <>
            <h1>LoginPage</h1>
            <button onClick={(e) => actions.user.login()}>Login</button>
        </>
    );
};

export default LoginPage;
