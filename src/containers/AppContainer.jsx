import React, { useMemo } from "react";
import App from "../components/App";

import { useStore } from "../store/index";

export default function AppContainer() {
    const { state } = useStore();
    const props = {
        message: useMemo(() => state.message, [state.message]),
    };
    return <App {...props} />;
}
