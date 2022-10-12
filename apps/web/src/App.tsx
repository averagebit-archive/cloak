import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

const App = () => {
    return (
        <div class="bg-base flex h-screen antialiased text-text">
            <div class="flex flex-row h-full w-full overflow-x-hidden">
                <Sidebar />
                <Chat />
            </div>
        </div>
    );
};

export default App;
