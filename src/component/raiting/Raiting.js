import React from 'react';
import ReactDOM from 'react-dom'
import './raiting.css'
import Paragraph from '../paragraph/Paragraph'
import SmallBtn from '../smallBtn/SmallBtn'
function Raiting({title,text,text0,text2,text3,text4,icon,image,coler1,color2}) {
    const color= {
            color:"#217BF4",
            fontWeight:"500"
    }

    return ( 
        <div className="raiting">
           <div className="raitingContent">
                <p className="raitingIcon"><span><img src={icon} alt="" srcset="" /></span><b>{title}</b></p>
                <p className="raitingIcon"><img src={image} alt="" srcset="" />  
                <span style={color}> {text}</span> <span >{text0}</span><span>{text2}</span><span style={color}>{text4}</span> {text3}   </p>
                <Paragraph 
                    text="More than 2 billion we people over countries use socibooks we to stay in touch with friends."
                    width="274px"
                />
                <SmallBtn  text="Join Our Community" color="#217BF4" icon="images/ArrowRight.svg" />
           </div>

           
        </div>
     );
}

export default Raiting;