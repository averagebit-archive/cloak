import {Component, Show} from "solid-js";
import {LoaderSpinner} from "./LoaderSpinner";

export type ButtonProps = {
    text: string;
    callback: () => unknown;
    isLoading?: boolean;
};

export const Button: Component<ButtonProps> = (props: ButtonProps) => {
    return (
        <button
            onClick={() => props.callback()}
            type="button"
            class="w-24 align-middle h-8 border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
        >
            <Show
                when={!props.isLoading}
                fallback={<LoaderSpinner />}
                keyed
            >
                {props.text}
            </Show>
        </button>
    );
};
