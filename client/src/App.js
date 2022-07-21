import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Home, About } from "./pages";

function App() {
    return (
        <>
            <Router>
                <Home />
                <About />
            </Router>
        </>
    );
}

export default App;
