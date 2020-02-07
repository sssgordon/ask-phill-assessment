import React, { Component } from "react";

import image1 from "../assets/slider_1.jpg";
import image2 from "../assets/slider_2.jpg";
import image3 from "../assets/slider_3.jpg";
import image4 from "../assets/slider_4.jpg";

export default class Slider extends Component {
    state = {
        images: [
            {
                url: image1,
                title: "Daily",
                link: "#"
            },
            {
                url: image2,
                title: "To travel",
                link: "#"
            },
            {
                url: image3,
                title: "Sport",
                link: "#"
            },
            {
                url: image4,
                title: "Medical",
                link: "#"
            }
        ]
    };

    render() {
        const { images } = this.state;
        return (
            <ul className="slider">
                {images &&
                    images.map((image, index) => (
                        <li key={index}>
                            <a className="slider__item" href={image.link}>
                                <h2 className="slider__item--title">
                                    {image.title}
                                </h2>
                                <div className="slider__item--overlay"></div>
                                <div className="slider__item--wrapper">
                                    <img
                                        className="slider__item--image"
                                        src={image.url}
                                        alt={image.title}
                                    />
                                </div>
                            </a>
                        </li>
                    ))}
            </ul>
        );
    }
}
