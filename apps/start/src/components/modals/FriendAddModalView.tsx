import {ModalProps} from "./Modal";
import {
    Component,
    createEffect,
    createResource,
    createSignal,
} from "solid-js";
import {http} from "~/services";
import {Button} from "../common/Button";
import {refetchRouteData} from "solid-start";

type FriendAddModalViewProps = {} & ModalProps;

const FriendAddModalView: Component<FriendAddModalViewProps> = (
    props: FriendAddModalViewProps
) => {
    const [hasAdded, setHasAdded] = createSignal(false);
    const [addFriendResource] = createResource(
        () => hasAdded(),
        () => http.Channel.addFriend("prime#324")
    );

    createEffect(() => {
        if (hasAdded() && !addFriendResource.loading) {
            // TODO: rather than here, use the resource storage to update the store then close the modal
            refetchRouteData(["friends"]);
            props.close();
        }
    });

    return (
        <>
            <h2 class="font-bold text-xl text-gray-500 text-left mb-4">
                Enter user tag
            </h2>
            <form class="w-full max-w-sm">
                <div class="md:flex md:items-center gap-4">
                    <input
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name"
                        type="text"
                        value="Jane Doe"
                    />
                </div>

                <Button
                    text="Add"
                    isLoading={addFriendResource.loading}
                    callback={() => setHasAdded(true)}
                />
            </form>
        </>
    );
};

export default FriendAddModalView;
