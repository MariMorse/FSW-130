import React, {Component} from "react"
import ThemeContext from "./themeContext"

class Button extends Component {
    render() {
        const theme = this.context
        return (
            <button className={`${theme}-theme`}>Switch Themes</button>
        )
    }
}

Button.contextType = ThemeContext

export default Button