import React, { Component } from "react"
import ThemeContext from "../Apps/themeContext"

class Button extends Component {
    render() {
        return (
            <button className="light-theme">Switch Theme</button>
        )
    }
}

Button.contextType = ThemeContext

export default Button