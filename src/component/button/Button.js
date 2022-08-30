import React from 'react'
import ReactDOM from 'react-dom'
import './button.css'
function Button({value,bgColor,border,color}) {
    const styled = {
        background:bgColor==="#217BF4"? "#217BF4":"white" =="white"?"white":"transparent",
        border:border,
        padding:".9rem 2.5rem",
        borderRadius:".7rem",
        color:color,
        boxShadow: "0px 7px 22px -6px rgba(33, 123, 244, 0.34)",
        cursor:"pointer"
    }
    
    return ( 
        <input type="button" style={styled} value={value} />
     );
}

export default Button;