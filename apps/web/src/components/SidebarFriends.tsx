import SidebarFriend from "./SidebarFriend";

const SidebarFriends = () => {
    return (
        <div class="flex flex-col mt-8">
            <div class="flex flex-row items-center justify-between text-xs">
                <span class="font-bold">Friends</span>
                <span class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                    4
                </span>
            </div>
            <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                <SidebarFriend name="Henry Boyd" />
                <SidebarFriend name="Marta Curtis" />
                <SidebarFriend name="Philip Tucker" />
                <SidebarFriend name="Christine Reid" />
            </div>
        </div>
    );
};

export default SidebarFriends;
