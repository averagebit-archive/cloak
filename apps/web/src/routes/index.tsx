import {A, useNavigate} from "@solidjs/router";
import {Component} from "solid-js";
import {Title} from "solid-start";
import Input from "~/components/common/Input";
import {Button} from "~/components/common/Button";

const RouteHome: Component = () => {
    const navigate = useNavigate();
    return (
        <main class="h-screen flex justify-center items-center">
            <Title>Cloak</Title>
            <div class="flex flex-col p-32 rounded bg-surface0 items-center">
                <Input />
                <Button
                    text="Login"
                    callback={() => navigate("/app")}
                />
            </div>
        </main>
    );
};

export default RouteHome;
