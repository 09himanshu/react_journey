import React from "react"
import ReactDOM from 'react-dom/client'

// React element 
const heading = React.createElement(
    'h4',
    {id: 'heading'},
    'Namaste React!'
)

// JSX
const JSX = <h1 id="heading ">Namaste React using JSX </h1>

// Functional Component
const Title = () => (
    <>
        <h1>this is title component</h1>
        {heading}
    </>
)

const FirstComponent = () => (
    <div id="container">
        <h1>Namaste React Functional Component</h1>
        <Title/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<FirstComponent />)