import React from 'react'
import './Main.css'

function Main(props) {
    console.log(props)
    console.log("mainnnnnnnnnnnnnnnnnnnnnnnnnnn")
    return (
        <div className="main">
            {props.children}
        </div>
    )
}

export default Main
