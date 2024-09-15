import React from "react"
import ReactDOM from 'react-dom/client'
import { Header } from "./Components/Header"
import { Body } from "./Components/Body"

/**
 * Planing for the site
 * 
 * Header
 *  -logo
 *  -Nav Menu
 * Body
 *  -Search
 *  -Resturant Container
 *      - Img
 *      - Name of Resturant, Star Rating, Cuisines
 * Footer
 *  - copyright
 *  - Links
 *  - Address
 *  - Contact
 * 
 */

const Applayout = () => (
    <div className="app">
        <Header/>
        <Body/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Applayout />)