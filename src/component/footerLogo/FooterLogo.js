import React from 'react';
import './footerLogo.css'

function FooterLogo() {
    return (  
        <div className="footerLogo">
            <li>Besnik Creative Agency.</li>
            <li><img src="images/logoWhite.svg" alt="" /></li>
            <div className="flexSocialIconFooter">
                <li><img src="images/Twiter.svg" alt="" /></li>
                <li><img src="images/instagram.svg" alt="" /></li>
                <li><img src="images/facebook.svg" alt="" /></li>
                <li><img src="images/Linkedin.svg" alt="" /></li>

            </div>
        </div>
    );
}

export default FooterLogo;