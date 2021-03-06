import React from "react"

import NavBar from "../components/NavBar"
import Main from "../components/Main"
import Footer from "../components/Footer"
import "./App.css"

function App() {
    return (
        <div className="container">
            <NavBar />
            <Main />
            <Footer />
        </div>
    )
}

export default App