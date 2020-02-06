import React, { Component } from "react";

class Menu extends Component {
    state = {
        menuItems: [
            { name: "all socks", link: "#" },
            { name: "daily", link: "#" },
            {
                name: "sports",
                subMenu: [
                    { name: "running", link: "#" },
                    { name: "to walk", link: "#" },
                    { name: "to ski", link: "#" },
                    { name: "hockey", link: "#" },
                    { name: "fitness", link: "#" },
                    { name: "tennis", link: "#" },
                    { name: "cycling", link: "#" },
                    { name: "football", link: "#" },
                    { name: "golf", link: "#" },
                    { name: "other sports", link: "#" }
                ]
            },
            { name: "to travel", link: "#" },
            {
                name: "medical",
                subMenu: [
                    { name: "medical conditions", link: "#" },
                    { name: "swollen feet", link: "#" },
                    { name: "swollen ankles", link: "#" },
                    { name: "tired legs", link: "#" },
                    { name: "pregnancy", link: "#" }
                ]
            }
        ]
    };

    render() {
        const { menuItems } = this.state;
        return (
            <ul className="menu">
                {menuItems &&
                    menuItems.map((item, index) =>
                        item.link ? (
                            <li key={index} className="menu__item">
                                <a className="menu__link" href={item.link}>
                                    {item.name}
                                </a>
                            </li>
                        ) : (
                            <li key={index} className="menu__item">
                                No link
                            </li>
                        )
                    )}
            </ul>
        );
    }
}

export default Menu;
