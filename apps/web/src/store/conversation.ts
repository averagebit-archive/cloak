import { http } from "./http";
import { createResource } from "solid-js";

export const createConversation = (actions) => {
    const [conversation] = createResource(http.getConversation);

    Object.assign(actions, {
        async createMessage() {},
    });

    return conversation;
};

export default createConversation;
