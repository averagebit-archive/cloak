// @refresh reload
import {Suspense} from "solid-js";
import {
    A,
    Body,
    ErrorBoundary,
    FileRoutes,
    Head,
    Html,
    Meta,
    Routes,
    Scripts,
    Title,
} from "solid-start";
import {RoomProvider} from "./context";
import {AuthProvider} from "./context/auth";
import "./root.css";

export default function Root() {
    return (
        <Html lang="en">
            <Head>
                <Title>Cloak</Title>
                <Meta charset="utf-8" />
                <Meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Body>
                <Suspense>
                    <ErrorBoundary>
                        <AuthProvider>
                            <RoomProvider>
                                <Routes>
                                    <FileRoutes />
                                </Routes>
                            </RoomProvider>
                        </AuthProvider>
                    </ErrorBoundary>
                </Suspense>
                <Scripts />
            </Body>
        </Html>
    );
}
