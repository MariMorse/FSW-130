import React from 'react'
import ReactDOM from 'react-dom'
import {ThemeContextProvider} from "./apps/themeContext"
import App from './apps/App'


ReactDOM.render(
    <ThemeContext.Provider>
        <App />
    </ThemeContext.Provider>,
    document.getElementById("root")
)