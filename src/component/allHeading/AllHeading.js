import React from 'react';
import ReactDOM from 'react-dom'
function AllHeading({fontSize,blockType,text,text2,margin}) {
const styled = {
    fontSize:fontSize,
    lineHeight:1.5,
    margin:margin===undefined?"0":margin
}
const spanBlock = {
    display:blockType
}

    return (  
        <>
            <h2 style={styled}>
                {text}<span style={spanBlock}>{text2}</span>
            </h2>
        </>
    );
}

export default AllHeading;