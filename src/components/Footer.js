import React, { Component } from "react";

export default class Footer extends Component {
    state = { value: "english" };

    onChange = event => {
        this.setState({ value: event.target.value });
    };

    render() {
        return (
            <section className="footer">
                <div className="footer__menu">
                    <a className="footer__menu--item" href="#">
                        Technology
                    </a>
                    <a className="footer__menu--item" href="#">
                        Reviews
                    </a>
                    <a className="footer__menu--item" href="#">
                        Blog
                    </a>
                    <a className="footer__menu--item" href="#">
                        Terms
                    </a>
                </div>
                <div className="footer__contact">
                    <p>
                        <strong>Call</strong> +31 (0) 20 260 0129
                    </p>
                    <p>
                        <strong>mail</strong> support@stoxenergy.com
                    </p>
                </div>
                <div className="footer__language-select">
                    <form>
                        <label className="footer__language-select--label">
                            <strong>
                                Language&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </strong>
                            <select
                                className="footer__language-select--languages"
                                value={this.state.value}
                                onChange={this.onChange}
                            >
                                <option
                                    value="nederlands"
                                    className="footer__language-select--language"
                                >
                                    Nederlands
                                </option>
                                <option
                                    value="french"
                                    className="footer__language-select--language"
                                >
                                    French
                                </option>
                                <option
                                    value="english"
                                    className="footer__language-select--language"
                                >
                                    English
                                </option>
                            </select>
                        </label>
                    </form>
                </div>
            </section>
        );
    }
}
