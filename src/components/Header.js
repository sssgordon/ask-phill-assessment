import React, { Component } from "react";

export default class Header extends Component {
    state = { numOfCartItems: 0 };
    render() {
        return (
            <section className="header">
                <div className="header__button">
                    <a href="#">
                        <div className="header__button--1"></div>
                        <div className="header__button--2"></div>
                    </a>
                </div>
                <a className="header__logo" href="#">
                    <svg viewBox="0 0 97 27">
                        <path
                            d="M86.183,82.453H63.736V85.4H73.5v23.2h2.926V85.4h9.76V82.453Zm12.851-.4a13.476,13.476,0,1,0,13.389,13.476A13.431,13.431,0,0,0,99.034,82.049m0,24.007A10.531,10.531,0,1,1,109.5,95.525a10.495,10.495,0,0,1-10.465,10.531m23.378-12h2.068V91.971l-9.454-9.517h-4.138Zm14.45-11.6-9.456,9.516v2.085h2.069L141,82.453h-4.138ZM129.475,97h-2.069V99.08l9.456,9.518H141Zm-18.587,11.6h4.138l9.454-9.518V97h-2.068Zm-57.216.387c-4.3,0-8.185-2.092-9.672-5.206l2.693-1.3c0.983,2.06,3.853,3.5,6.979,3.5,3.972,0,7.329-2.3,7.329-5.022,0-1.983-.821-4.349-7.217-5.03-8.082-.861-9.288-4.731-9.288-6.961,0-3.906,4.029-6.968,9.177-6.968a10.362,10.362,0,0,1,7.446,2.875L58.96,86.949A7.372,7.372,0,0,0,53.672,85c-3.358,0-6.19,1.815-6.19,3.963,0,2.843,4.145,3.708,6.616,3.972,6.563,0.7,9.891,3.395,9.891,8.019,0,4.427-4.63,8.028-10.317,8.028"
                            transform="translate(-44 -82)"
                        ></path>
                    </svg>
                    <span></span>
                    <p>energy socks</p>
                </a>

                <div className="header__cart">
                    <a href="#">
                        <svg viewBox="0 0 32 42">
                            <path
                                d="m718 10a8 8 0 0 0 -16 0h-8l.027 34h31.973v-34zm-7.987-5.37a5.115 5.115 0 0 1 4.987 5.37h-10a5.136 5.136 0 0 1 5.013-5.37zm13.987 36.37h-27v-28h5v2h3v-2h10v2h3v-2h5v29z"
                                fill-rule="evenodd"
                                transform="translate(-694 -2)"
                            ></path>
                        </svg>
                        <span>{this.state.numOfCartItems}</span>
                    </a>
                </div>
            </section>
        );
    }
}
