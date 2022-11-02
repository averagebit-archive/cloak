import {JSX, Suspense} from "solid-js";
import {useResource} from "../store/auth";

type AuthProps = {
    children: JSX.Element;
};

export const Auth = (props: AuthProps) => {
    if (localStorage.getItem("token")) {
        useResource();
    }

    return (
        <Suspense fallback={<span>app is loading...</span>}>
            {props.children}
        </Suspense>
    );
};
