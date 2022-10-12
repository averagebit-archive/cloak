const SidebarFriend = (props) => {
    return (
        <button
            class="flex flex-row items-center hover:bg-surface0 rounded-md p-2 text-subtext0"
            classList={{ "bg-surface0 text-white": props.active }}
        >
            <div class="flex items-center justify-center h-8 w-8 font-semibold bg-surface2 rounded-full">
                {props.name[0].toUpperCase()}
            </div>
            <div class="ml-2 font-medium">{props.name}</div>
        </button>
    );
};

export default SidebarFriend;
