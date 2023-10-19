import React, { useState, useEffect } from "react";
import "../styles/Title.css"; // Import the CSS file for MainContainer

function Title(props) {
    return (
        <div className="titleBlock">
            <span className="titleDate">{props.date}</span>
            <span className="titleCity">Weather for {props.city}, {props.state}</span>
        </div>
    ); 
}

export default Title;
