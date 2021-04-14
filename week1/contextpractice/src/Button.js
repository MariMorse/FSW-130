import React, {Component} from "react"
import ThemeContext from "./themeContext"

class Button extends Component {
    render() {
        return (
            <button className="light-theme">Change Themes</button>
        )
    }
}

Button.contextType = ThemeContext

export default Button