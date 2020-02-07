import React, { Fragment } from "react";
import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import Help from "./components/Help";

function App() {
    return (
        <Fragment>
            <Header />
            <Main />
            <Help />
        </Fragment>
    );
}

export default App;
