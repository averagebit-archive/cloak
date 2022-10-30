import { Show } from "solid-js";
import FriendAddModalView from "./FriendAddModalView";

const Modals = {
    friendAdd: "friendAdd"
} as const;

export type ModalTypes = keyof typeof Modals;

export type ModalProps = {
    modalType: ModalTypes | null;
    close: () => void;
}

const Modal = (props: ModalProps) => {
    return (
        <Show when={props.modalType} keyed>
            <div
                class="bg-slate-800 bg-opacity-90 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0"
                onClick={() => props.close()}>
                <div class="bg-white px-16 py-14 rounded-md text-center" onClick={(e) => e.stopPropagation()}>
                    <Show when={props.modalType === Modals.friendAdd} children={<FriendAddModalView {...props} />}
                          keyed />
                </div>
            </div>
        </Show>
    );
};

export default Modal;
