import React from 'react'
import "./community.css"
import SmallBtn from '../smallBtn/SmallBtn';
import AllHeading from '../allHeading/AllHeading';
import Paragraph from '../paragraph/Paragraph';
function Community() {
    return (  
     
         <div className="community">
            <div className="communityContent">
                <SmallBtn color="#217BF4" text="Our Community"/>
                <AllHeading text="Community Main Feature"/>
                <Paragraph text="The wise man therefore always holds in these matters to this principle of selection."/>
            </div>
        </div>

    );
}

export default Community;