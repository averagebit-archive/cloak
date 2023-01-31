import { z } from "zod";
import { FormError } from "solid-start/data";
import { createUserSession, login } from "../context/session";

async function createLoginForm(form: FormData) {
    const loginTypes = ["login"] as const;

    const LoginForm = z.object({
        loginType: z.enum(loginTypes),
        username: z.string({
            required_error: "Username is required"
        }).min(3),
        redirectTo: z.string()
    });

    const { username, loginType, redirectTo } = LoginForm.parse({
        username: form.get("username"),
        redirectTo: form.get("redirectTo") || "/",
        loginType: loginTypes[0]
    });

    switch (loginType) {
        case "login": {
            const user = await login({ username });
            console.log(user)
            if (!user) {
                throw new FormError(`Username is invalid`);
            }

            return createUserSession(`${user.token}`, redirectTo);
        }
        default: {
            throw new FormError(`Login type invalid`);
        }
    }
}

export default createLoginForm;
