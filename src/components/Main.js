import React, { Component } from "react";

import Slider from "./Slider";
import Menu from "./Menu";
import Footer from "./Footer";

export default class Main extends Component {
    render() {
        return (
            <section className="main">
                <Slider />
                <Menu />
                <Footer />
            </section>
        );
    }
}
