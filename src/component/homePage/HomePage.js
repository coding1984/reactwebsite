import React from 'react'
import Bg from '../Bg/Bg'
import Nav from '../nav/Nav'
import ShowCase from '../showCase/ShowCase'
import AboutUs from '../aboutUs/AboutUs'
import Raiting from '../raiting/Raiting'
import FullBlock from '../fullBlock/FullBlock'
import Community from '../community/Community'
import Feature from '../feature/Feature'
import './homePage.css'
import Team from '../team/Team'
import OurApplication from '../ourApplication/OurApplication'
import News from '../news/News'
import Footer from '../footer/Footer'
import FooterLogo from '../footerLogo/FooterLogo'

export default function HomePage() {
    const color = "linear-gradient(311.76deg, #D4E7FE -15.24%, #FFFFFF 78.85%)"
    const bgCommunity = "linear-gradient(0deg, rgba(241, 246, 253, 0) 1.63%, #F1F6FD 20.5%, #F1F6FD 58.57%, #FFFFFF 100%)"
    const styledFlex = {
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        flexWrap:"wrap",
        gap:"3rem"
    }

    return(
        <>
            <Bg height="746px" color={color}>
                <Nav/>
                <ShowCase/>
            </Bg>
            <Bg height="576px" color="">
                <AboutUs/>
            </Bg>

            <Bg>
                <div style={styledFlex}>
                    <Raiting icon="images/Star.svg" title="4.8 Rating" text="+836k" text2="Members" 
                            image="images/people.png" coler1="red" coler2=""/>
                    <Raiting icon="images/Trophy.svg" title="4.8 Rating" text0="Best of" text4="2021" text3="on Github"
                            image="images/Ellipse.png" coler1="red" coler2=""/>
                     <FullBlock/>       
                </div>
            </Bg>
            <Bg  color={bgCommunity} >
                <Community/>
                <Bg className="featureFlex">
                    <Feature headingText="Members, Friends" 
                        paragraphText="Members, Friends Connection ( like followers ), Private Message"
                        icon="images/memberIcon.svg"
                        />   

                    <Feature headingText="Groups" 
                        paragraphText="Your users can create groups to let other users to join and talk"
                        icon="images/groupIcon.svg"
                        />     

                        <Feature headingText="Forum" 
                            paragraphText="Forum is ready by BBPress. Your users can make topics and talk."
                            icon="images/formIcon.svg"
                        />  

                        <Feature headingText="Custom Module" 
                            paragraphText="You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder."
                            icon="images/moduleIcon.svg"
                        />  

                        <Feature headingText="List Builder" 
                            paragraphText="Members, Groups list can be modified by drag & drop live builder."
                            icon="images/builderIcon.svg"
                        />  

                        <Feature headingText="List Scroll Effects" 
                            paragraphText="8 different scroll effects are ready.
                            You can always change by your tastes."
                            icon="images/effectIcon.svg"
                        />  
                    </Bg>
            </Bg>

            <Bg height="auto">
                <Team/>
            </Bg>
            <Bg height="" color="#E5F0FD">
                <OurApplication/>
            </Bg>

            <Bg>
                <News/>
            </Bg>
            <Bg className="footerParentFlex" color="#2B2B39" marginTop="5rem"  >
                    <Footer/>
            </Bg>

            <Bg color="#20202D" >
                <FooterLogo/>
            </Bg>
        </>
        
        )
}