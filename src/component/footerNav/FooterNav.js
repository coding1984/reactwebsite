import React from 'react';
import './footerNav.css'
function FooterNav({title,text1,text2,text3,text4}) {
    return (  
        <div className="footerNav">
            <p className="title">{title}</p>
            <li>{text1}</li>
            <li>{text2}</li>
            <li>{text3}</li>
            <li>{text4}</li>
        </div>
    );
}

export default FooterNav;