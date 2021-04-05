import makeStore from "@thefrontend/contextstore";

const state = {
    message: "Hello from App via ContextStore!",
};

export const { Provider, useStore } = makeStore(state);
