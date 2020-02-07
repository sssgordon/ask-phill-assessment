import React, { Component } from "react";

export default class Help extends Component {
    state = { searchValue: "", toggle: false };

    onChange = event => {
        this.setState({ searchValue: event.target.value });
    };

    toggle = () => {
        this.setState({ toggle: !this.state.toggle });
    };

    render() {
        return (
            <div className="help">
                {/* help button */}
                <button
                    for="help-toggle"
                    class={
                        this.state.toggle ? "help__icon--toggled" : "help__icon"
                    }
                    onClick={this.toggle}
                >
                    <svg
                        className="help__svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                    >
                        <path d="M11,12.3V13c0,0-1.8,0-2,0v-0.6c0-0.6,0.1-1.4,0.8-2.1c0.7-0.7,1.6-1.2,1.6-2.1c0-0.9-0.7-1.4-1.4-1.4 c-1.3,0-1.4,1.4-1.5,1.7H6.6C6.6,7.1,7.2,5,10,5c2.4,0,3.4,1.6,3.4,3C13.4,10.4,11,10.8,11,12.3z"></path>
                        <circle cx="10" cy="15" r="1"></circle>
                        <path d="M10,2c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S5.6,2,10,2 M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0 L10,0z"></path>
                    </svg>
                </button>
                {/* help form */}
                <div
                    className={
                        this.state.toggle ? "help__form--toggled" : "help__form"
                    }
                >
                    <div className="help__form--header">
                        <h1>Help</h1>
                        <button
                            for="help-close"
                            className="help__form--button"
                            onClick={this.toggle}
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                className="help__form--svg"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    d="M3 8h10"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="help__form--main">
                        <div className="help__form--search">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                className="help__form--svg"
                            >
                                <circle
                                    cx="6"
                                    cy="6"
                                    r="5.5"
                                    fill="none"
                                    stroke="#c2c8cc"
                                ></circle>
                                <path
                                    stroke="#c2c8cc"
                                    strokeLinecap="round"
                                    d="M15 15l-5-5"
                                ></path>
                            </svg>
                            <input
                                className="help__form--input"
                                type="text"
                                placeholder="How can we help?"
                                onChange={this.onChange}
                                value={this.state.searchValue}
                            ></input>
                        </div>
                        <a className="help__form--footer" href="#">
                            zendesk
                        </a>
                    </div>
                </div>
                )
            </div>
        );
    }
}
