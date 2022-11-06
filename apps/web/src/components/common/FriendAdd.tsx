import {useRoomContext} from "~/context";

type FriendAddProps = {
    text?: string;
};

const FriendAdd = (props: FriendAddProps) => {
    const [_, actions] = useRoomContext();

    return (
        <button
            class="flex flex-row items-center justify-between text-sm text-subtext0"
            onClick={() => actions.openModal("friendAdd")}
        >
            <span>{props.text}</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 512 512"
                stroke="currentColor"
            >
                <title>ionicons-v5-a</title>
                <line
                    x1="256"
                    y1="112"
                    x2="256"
                    y2="400"
                    style={{"fill":"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"50px"}}
                />
                <line
                    x1="400"
                    y1="256"
                    x2="112"
                    y2="256"
                    style={{"fill":"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"50px"}}
                />
            </svg>
        </button>
    );
};

export default FriendAdd;
