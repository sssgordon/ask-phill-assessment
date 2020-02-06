import React, { Component } from "react";

import Slider from "./Slider";
import Menu from "./Menu";

class Main extends Component {
    render() {
        return (
            <section className="main">
                <Slider />
                <Menu />
            </section>
        );
    }
}

export default Main;
