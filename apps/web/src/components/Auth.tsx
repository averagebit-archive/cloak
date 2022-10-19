import { Suspense } from "solid-js";

export const Auth = (props: any) => {
    return (
        <Suspense fallback={<span>app is loading...</span>}>
            {props.children}
        </Suspense>
    );
};
