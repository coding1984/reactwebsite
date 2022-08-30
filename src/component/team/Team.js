import React from 'react'
import './team.css'
import AllHeading from '../allHeading/AllHeading';
import Paragraph from '../paragraph/Paragraph';
import SmallBtn from '../smallBtn/SmallBtn';
import Button from '../button/Button';
import ProfileCard from '../profileCard/ProfileCard';

function Team() {
    return (  
        <div className="team">
            <div className="teamContent">
                <SmallBtn text="Valuable Team" color="#217BF4" />
                <AllHeading text="Our Active Members" fontSize="2.25rem" />
                <Paragraph text="when an unknown printer took a galley of type and meeting"  blockType="block" text2=" fari scrambled it." />
            </div>

            <div className="teamBtn">
                <ul className="teamFlex">
                    <li>News</li>
                    <li>Popular</li>
                    <li><Button bgColor="#217BF4" border="none" value="Active" color="white" /></li>
                </ul>
            </div>

            <div className="profileContainer">
                <ProfileCard image="images/fahim.png" headingText="Fahim Rahman" text="@rahman"  />
                <ProfileCard image="images/kaxi.png" headingText="Kazi Rahman" text="@Rahman"  />
                <ProfileCard image="images/ali.png" headingText="Masterero Ali" text="@Master"  />
                <ProfileCard image="images/alia.png" headingText="Alia Karon" text="@Alia"  />
            </div>
        </div>
    );
}

export default Team;