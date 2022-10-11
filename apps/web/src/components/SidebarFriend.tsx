const SidebarFriend = (props) => {
    return (
        <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
            <div class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                F
            </div>
            <div class="ml-2 text-sm font-semibold">{props.name}</div>
        </button>
    );
};

export default SidebarFriend;
