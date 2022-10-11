import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

const App = () => {
    return (
        <div class="flex h-screen antialiased text-gray-800">
            <div class="flex flex-row h-full w-full overflow-x-hidden">
                <Sidebar />
                <Chat />
            </div>
        </div>
    );
};

export default App;
