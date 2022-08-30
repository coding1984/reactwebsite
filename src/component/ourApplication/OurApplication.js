import React from 'react'
import AllHeading from '../allHeading/AllHeading'
import Paragraph from '../paragraph/Paragraph'
import SmallBtn from '../smallBtn/SmallBtn'
import './ourApplication.css'

function OurApplication() {
    return (  
        <div className="applicationContet">
            <div className="applicationItems">
                <SmallBtn text="Get Our Aplication"  color="#217BF4"/>    
                <AllHeading text="You Can Easily Find This App…!" fontSize="2.25rem" />
                <Paragraph text="I say chap that’s suing lavatory chip shop gosh off his smashing boot are you taking the piss posh loo brilliant." />
                <div className="appIcon">
                    <img src="images/appIcon.svg" alt="" />
                    <img src="images/appIcon2.svg" alt="" />
                </div>                
            </div>
            <div><img className="mobileImage" src="images/mobileP.png" alt="" srcset="" /></div>
        </div>
    );
}

export default OurApplication;