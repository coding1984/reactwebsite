import React from 'react';
import NewsCard from '../newsCard/NewsCard'
import SmallBtn from '../smallBtn/SmallBtn';
import AllHeading from '../allHeading/AllHeading';
import './news.css'

function News() {
    return (  
        <>
            <div className="newsTitle">
                <SmallBtn text="Get Our Application" color="#217BF4" />
                <AllHeading text="Letest News" fontSize="2rem"  />
            </div>
                <div className="news">
                    <NewsCard image="images/newsImage1.svg" smallText="Continue Reading"  text="It Does Not Matter Hows " text2="Slowly go as Long"    /> 
                    <NewsCard image="images/newsImage2.svg" smallText="Continue Reading"  text="Netbook Network Added " text2=" New Photo Filter"    /> 
                    <NewsCard image="images/newsImage3.svg" smallText="Continue Reading"  text="We Optimised Netbooks " text2=" Better Navigation"    /> 
   
                </div>
        </>
    );
}

export default News;

