import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { createAuth } from "./auth";
import { createConversation } from "./conversation";

const StoreContext = createContext();

export const StoreProvider = (props) => {
    let user, conversation;

    const [state, setState] = createStore({
        get user() {
            return user();
        },
        get conversation() {
            return conversation();
        },
    });

    const actions = {};
    const store = [state, actions];

    user = createAuth(actions, state);
    conversation = createConversation(actions, state);

    return (
        <StoreContext.Provider value={store}>
            {props.children}
        </StoreContext.Provider>
    );
};

export const useStore = () => useContext(StoreContext);
