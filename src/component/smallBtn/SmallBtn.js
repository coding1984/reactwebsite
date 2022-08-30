import React from 'react'
function SmallBtn({bgColor,color,border,fontSize,bold,text,padding,icon}) {
    const styled={
        fontSize:fontSize,
        background:bgColor==="#217cf41e"? "#217cf41e":"transparent",
        color:color,
        padding:padding === undefined?"0":".75rem 1.875rem", 
        borderRadius: "0.5rem",
        border:border,
        fontWeight:bold
    }

    return (  
        <>
            <span style={styled}> {text}</span> <span><img src={icon} alt="" srcset="" /></span>
        </>
    );
}

export default SmallBtn;