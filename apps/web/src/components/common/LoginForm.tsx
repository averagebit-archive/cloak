import type { Component } from "solid-js";
import { Show } from "solid-js";
import { createServerAction$ } from "solid-start/server";
import createLoginForm from "~/server-actions/login-form";

type LoginFormProps = {
    redirectTo: string;
}

const LoginForm: Component<LoginFormProps> = (props) => {
    const [loggingIn, { Form }] = createServerAction$(createLoginForm);

    return (
        <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <Form>
                        <div>
                            <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
                            <div class="mt-1">
                                <input id="redirectTo" name="redirectTo"
                                       class="hidden" value={props.redirectTo} />
                                <input id="username" name="username" type="username" autocomplete="username" value="KTuxasx" required
                                       class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                            </div>
                        </div>

                        <div class="mt-2">
                            <button type="submit"
                                    class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                Login
                            </button>
                        </div>

                        <Show when={loggingIn.error?.fieldErrors?.username}>
                            <p role="alert">{loggingIn.error.fieldErrors.username}</p>
                        </Show>
                        <Show when={loggingIn.error}>
                            <p role="alert" id="error-message">
                                {loggingIn.error.message}
                            </p>
                        </Show>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
