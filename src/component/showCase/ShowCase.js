import React from 'react';
import ReactDOM from 'react-dom'
import Button from '../button/Button'
import './showCase.css'
import SmallBtn from '../smallBtn/SmallBtn';
function ShowCase() {
    return (  
        <div className="showCase">
            <div className="showCaseContetn">
                    <SmallBtn bgColor="#217cf41e" color="#217BF4" fontSize="0.75rem" text="Netbook community" padding="true"/>
                <h1>
                    Your Solutions For <span className="comBlock">Communiity!</span>
                </h1>
                <p>More than 2 billion people in over countries use socibook <span  className="paraBlock"> to stay in touch with friends & family.</span></p>
                <div className="showCaseBtn">
                    <Button bgColor="#217BF4" value="About More" border="none" color="white"/>
                    <Button border="1px solid #217BF4" value="Invite Friend"/>
                </div>
            </div>
            <div className="showCaseImage">
                <img className="imageWidth" src="images/showCaseImg.png" alt="" srcset="" />
            </div>
        </div>
    );
}

export default ShowCase;