import React from 'react';
import ReactDOM from 'react-dom'
import './aboutUs.css'
import SmallBtn from '../smallBtn/SmallBtn';
import AllHeading from '../allHeading/AllHeading';
import Paragraph from '../paragraph/Paragraph';

function AboutUs() {
    return (  
        <div className="aboutUs">
            <div className="whyJoin">
                <SmallBtn color="#217BF4" bold="500" fontSize="1.2rem" text="Whats Netboks?" />        
                <AllHeading 
                    text="Why Join to Netbook" 
                    text2="Social Network?"
                    blockType="block"
                    fontSize="2.25rem"
                    margin="0.5rem 0"
                />
                <Paragraph 
                text="Recent surveys have indicated that small businesses recognise the need they have to connect with consumer."
                fontSize="1rem"
                width="25.375rem"
                />
                <ul>
                    <li className="listStyle" >Group</li>
                    <li className="listStyle">Messages</li>
                    <li className="listStyle">Share</li>
                </ul>
            </div>
            <div className="whyJoinImage">
                <img  className="aboutUsImage" src="images/aboutUs.png" alt="" srcset="" />
            </div>
        </div>
    );
}

export default AboutUs
