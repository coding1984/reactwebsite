import React from 'react';
import SmallBtn from '../smallBtn/SmallBtn'
import AllHeading from '../allHeading/AllHeading'
import './newsCard.css'
function NewsCard({image,text,text2,smallText}) {
    return (  

           <div className="newsCardFlex">
                 <img className="newsImage" src={image} alt="" />
               <div className="centerContent">
                    <AllHeading text={text} fontSize="1.2rem" blockType="block" margin="1rem 0" text2={text2}/>
                    <SmallBtn text={smallText} icon="images/ArrowRight.svg"/>
               </div>
           </div>

    );
}

export default NewsCard;