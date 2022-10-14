import { createContext, Resource, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { createAuth, User, UserActions } from "./auth";
import { createConversation } from "./conversation";

const StoreContext = createContext();

export type Store = {
    user: Resource<User>;
    conversation: any;
}

export type StoreActions = {
    user: UserActions;
    conversation: any;
};

type SuperStore = [Store, StoreActions];

export const StoreProvider = (props) => {
    const storeDefault: Store = {
        user: null,
        conversation: null
    };

    const [state, setState] = createStore(storeDefault);

    const [userStore, userActions] = createAuth();
    // const conversation = createConversation((conversationActions) => {
    //     const actionsOld: StoreActions = {
    //         user: null,
    //         conversation: null
    //     };
    //     actionsOld.conversation = conversationActions;
    // });

    setState({
        user: userStore,
        // conversation
    });

    const actions: StoreActions = {
        user: userActions,
        conversation: null
        // ...actionsOld
    };

    return (
        <StoreContext.Provider children={props.children} value={[state, actions]} />
    );
};

export const useStore = (): SuperStore => useContext(StoreContext) as SuperStore;
