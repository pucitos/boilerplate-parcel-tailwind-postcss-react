import React, { memo } from "react";

const App = memo(({ message }) => (
    <div className="flex flex-row flex-wrap justify-center content-center h-screen">
        <div>{message}</div>
    </div>
));

export default App;
