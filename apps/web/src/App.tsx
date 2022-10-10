import SideNav from "./components/SideNav";
import ChatContainer from "./components/ChatContainer";

const App = () => {
    return (
        <div class="flex h-screen antialiased text-gray-800">
            <div class="flex flex-row h-full w-full overflow-x-hidden">
                <SideNav />
                <ChatContainer />
            </div>
        </div>
    );
};

export default App;
