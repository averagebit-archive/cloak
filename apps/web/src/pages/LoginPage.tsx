import { useStore } from "../store";

export function LoginPage() {
    const [, actions] = useStore();

    return (
        <>
            <h1>LoginPage</h1>
            <button onClick={() => actions.user.setUser()}>Login</button>
        </>
    );
};

export default LoginPage;
