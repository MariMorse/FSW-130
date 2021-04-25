import React from 'react'
import ReactDOM from 'react-dom'
import {BookContextProvider} from "./bookContext"
import App from './apps/App'


ReactDOM.render(
    <BookContextProvider>
         <App />
     </BookContextProvider>, 
     document.getElementById('root')
)