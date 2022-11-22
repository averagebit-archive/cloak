import {ModalProps} from "./Modal";
import {Component} from "solid-js";
import {http} from "~/services";
import {Button} from "../common/Button";
import {createRouteAction} from "solid-start";
import Input from "~/components/common/Input";

type FriendAddModalViewProps = {} & ModalProps;

const FriendAddModalView: Component<FriendAddModalViewProps> = (props: FriendAddModalViewProps) => {
    const [addingFriend, addFriend] = createRouteAction(
        async () => {
            await http.addFriend(4);
        },
        {invalidate: ["friends"]}
    );

    return (
        <>
            <h2 class="font-bold text-xl text-gray-500 text-left mb-4">Enter user tag</h2>
            <form class="w-full max-w-sm">
                <div class="md:flex md:items-center gap-4">
                    <Input />
                </div>

                <Button
                    text="Add"
                    isLoading={addingFriend.pending}
                    callback={() => addFriend()}
                />
            </form>
        </>
    );
};

export default FriendAddModalView;
