import React from 'react'
import ReactDOM from 'react-dom'
function Paragraph({fontSize,blockType,text,text2,width,lineHeight}) {
    const styled = {
        fontSize:fontSize,
        lineHeight:lineHeight===undefined?1.8:lineHeight,
        maxWidth:width,
        minWidth:"auto"
    }
    const spanBlock = {
        display:blockType
        
    }
    
        return (  
            <>
                <p style={styled}>
                    {text}<span style={spanBlock}>{text2}</span>
                </p>
            </>
        );
    }

export default Paragraph;