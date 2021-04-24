import React from "react"
import {ThemeContextConsumer} from "../apps/themeContext"

function Main() {
    return (
        <ThemeContextConsumer>
            {context => (
                <main className={`${context.theme}-theme`}>
                    <div className="common">
                        <h2>Click here to change the theme</h2>
                        <button onClick={context.toggleTheme}>Change Theme</button>
                    </div>
                </main>
            )}
        </ThemeContextConsumer>
    )
}


export default Main