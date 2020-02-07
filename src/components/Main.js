import React, { Component } from "react";

import Slider from "./Slider";
import Menu from "./Menu";

export default class Main extends Component {
    render() {
        return (
            <section className="main">
                <Slider />
                <Menu />
            </section>
        );
    }
}
