import React from 'react'
import "./ToggleButton.css"
export default function ToggleButton(props){
    return(
        <button className="toggle-button" onClick={props.click}>
            <div className="line"/>
            <div className="line"/>
            <div className="line"/>
        </button>
    )
}