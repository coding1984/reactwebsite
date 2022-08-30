import React from 'react'
import Subscribe from '../subscribe/Subscribe';
import './footer.css'
import FooterNav from '../footerNav/FooterNav';
import Bg from '../Bg/Bg';


function Footer() {
    return (  
   
       <>
           <div className="footerFlexs">
            <FooterNav title="Home" text1="Home" text2="Community" text3="Events" text4="Contact"/>
                <FooterNav title="Resources" text1="Blog" text2="News" text3="Guides" text4="Help Center"/>
                <FooterNav title="Community" text1="NewsFeed" text2="Profile" text3="Friends" text4="Forums"/>
                <FooterNav title="Main links" text1="Members" text2="Activity" text3="Groups" text4="Private"/>
                <Subscribe title="Subscribe Cirkle" newsTitle="Newsletter" 
                text="Subscribe to be the first one to know about updates. Enter your email"/>
           </div>

        </>
    );
}

export default Footer;