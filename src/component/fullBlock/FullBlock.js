import React from 'react';
import SmallBtn from '../smallBtn/SmallBtn';
import AllHeading from '../allHeading/AllHeading';
import Paragraph from '../paragraph/Paragraph';
import Button from '../button/Button';
const style={
    maxWidth:"350px",
}


function FullBlock() {
    return (  
         <div style={style}>
            <SmallBtn text="Our Achievement"/>
            <AllHeading text="We are Connecting You The Digital Life. "  fontSize="2.25rem" margin="0.5rem 0"/>
            <Paragraph text="The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants."/>
            <Button value="Discover me" bgColor="#217BF4" color="white" border="none"/>  
         </div>
    );
}

export default FullBlock;