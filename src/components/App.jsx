import React, { memo } from "react";

const App = memo(({ message }) => (
    <div className="flex flex-row flex-wrap justify-center content-center h-screen miaclasse">
        <div className="miaclasse">{message}</div>
    </div>
));

export default App;
