import {JSX, Suspense} from "solid-js";

type AuthProps = {
    children: JSX.Element;
};

export const Auth = (props: AuthProps) => {
    return (
        <Suspense fallback={<span>app is loading...</span>}>
            {props.children}
        </Suspense>
    );
};
