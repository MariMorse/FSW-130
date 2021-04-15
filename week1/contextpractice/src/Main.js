import React, {Component} from "react"
import ThemeContext from "./themeContext"

class Main extends Component {
    render() {
        const theme = this.context
        return (
            <header className={`${theme}-theme`}>
                <h2>{theme === "light" ? "Light" : "Dark"} Theme</h2>
            </header>
        )
    }
}

Main.contextType = ThemeContext

export default Main