import { useStore } from "../store";

const LoginPage = () => {
    const [, actions] = useStore();

    return (
        <>
            <h1>LoginPage</h1>
            <button onClick={() => actions.user.login()}>Login</button>
        </>
    );
};

export default LoginPage;
