import React from 'react'
import ReactDOM from 'react-dom';
import './bg.css'

function Bg(props) {
    const styled = {
        background:props.color,
        maxWidth:"1400px",
        margin:"0 auto",
        marginTop:props.marginTop??" ",
        height:props.height,
        fontFamily:"'Inter', sans-serif",
    }
    const width ={
        maxWidth:"1200px",
        margin:"0 auto"
    }

    return ( 
        <div style={styled} >
            <div style={width} className={props.className}>
                {props.children}
            </div>
            
        </div>
     );
}

export default Bg;