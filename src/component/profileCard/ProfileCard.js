import React from 'react';
import AllHeading from '../allHeading/AllHeading';
import Paragraph from '../paragraph/Paragraph';
import './profileCard.css'


function ProfileCard({image, headingText, text}) {
    return ( 
           <div className="prifileCard">
                
                    <div className="profileContents">
                    <div className="border"></div>
                        <img className="profileImage" src={image} alt="" srcset="" />
                        <AllHeading text={headingText}  />
                        <Paragraph text={text} lineHeight="-0" />
                    </div>
           </div> 
     );
}

export default ProfileCard;