import React, { Component } from "react";

import image1 from "../assets/slider_1.jpg";
import image2 from "../assets/slider_2.jpg";
import image3 from "../assets/slider_3.jpg";
import image4 from "../assets/slider_4.jpg";

class Slider extends Component {
    state = {
        slider: [
            {
                url: image1,
                title: "Daily"
            },
            {
                url: image2,
                title: "To travel"
            },
            {
                url: image3,
                title: "Sport"
            },
            {
                url: image4,
                title: "Medical"
            }
        ]
    };

    render() {
        const images = this.state.slider;
        return (
            <section className="slider">
                <ul className="slider__list">
                    {images &&
                        images.map((image, index) => (
                            <li key={index}>
                                <a href="#">
                                    <h2 className="slider__title">
                                        {image.title}
                                    </h2>
                                    <div className="slider__image-overlay"></div>
                                    <div className="slider__image-wrapper">
                                        <img
                                            className="slider__image"
                                            src={image.url}
                                            alt={image.title}
                                        />
                                    </div>
                                </a>
                            </li>
                        ))}
                </ul>
            </section>
        );
    }
}

export default Slider;
