import React from 'react'
import Paragraph from '../paragraph/Paragraph'
import Button from '../button/Button'

import './subscribe.css' 
function Subscribe({title,newsTitle,text}) {
    return (  
        <div className="subscribe">
            <p  className="subscribeTitel">{title}</p>
            <p className="subscribeTitel">{newsTitle}</p>
            <Paragraph text={text}/>
            <div className="inputSubcribe">
                <input type="search" name="" placeholder="Email Address" id="" />
                <Button value="Subscribe" border="0"  bgColor="white" />
            </div>
        </div>  
    );
}

export default Subscribe;