import React from 'react'
import ReactDOM from 'react-dom'

import App from './apps/App'


ReactDOM.render(
    <ThemeContext.Provider>
        <App />
    </ThemeContext.Provider>,
    document.getElementById("root")
)