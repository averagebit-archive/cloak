import { http } from "./http";
import { createResource } from "solid-js";

export const createConversation = (callback: any) => {
    const [conversation] = createResource(http.getConversation);
    const conversationActions = {
        async createMessage() {
        }
    };

    callback(conversationActions);

    return conversation;
};

export default createConversation;
