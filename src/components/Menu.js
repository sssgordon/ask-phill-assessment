import React, { Component } from "react";

export default class Menu extends Component {
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
                ],
                toggle: false
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
                ],
                toggle: false
            }
        ]
    };

    toggle = name => {
        this.setState(prevState => ({
            menuItems: prevState.menuItems.map(
                item =>
                    item.name === name
                        ? { ...item, toggle: !item.toggle }
                        : { ...item, toggle: false } // turns off all other toggles
            )
        }));
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
                                <button
                                    className={
                                        item.toggle
                                            ? "menu__toggled"
                                            : "menu__toggle"
                                    }
                                    onClick={() => this.toggle(item.name)}
                                    type="button"
                                >
                                    {item.name}
                                </button>
                                {item.toggle && (
                                    <ul className="menu__submenu">
                                        {item.subMenu.map((subItem, index) => (
                                            <li
                                                className="menu__submenu--item"
                                                key={index}
                                            >
                                                <a
                                                    className="menu__submenu--link"
                                                    href={subItem.link}
                                                >
                                                    {subItem.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        )
                    )}
            </ul>
        );
    }
}
