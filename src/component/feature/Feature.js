import React from 'react';
import AllHeading from '../allHeading/AllHeading';
import Paragraph from '../paragraph/Paragraph';
import './feature.css';
function Feature({headingText,paragraphText,icon}) {
    return (  

            <div className="feature">
             <img className="featureIcon" src={icon} alt="" />
                <div className="featureContent">
                <AllHeading text={headingText} />
                <Paragraph text={paragraphText}/>
                </div>
            </div>
    );
}

export default Feature;