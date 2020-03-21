import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SlideShow2 = ({ items }) => {
    const caraouselItems = items.map((item, index) => {
        return (
                <div key={index}>
                    <iframe className="slideImage"  src={item.youtubeLink} />
                    {/*<img src={item.img} className="d-block slideImage"/>
                    <p className="legend">
                    <a className="title" href={item.src}>{item.title} <FontAwesomeIcon style={{ fontSize: "30px", marginLeft: "20px"}} icon={faArrowRight} /></a> 
                    </p>*/}
                </div>
        )
    })
    return (
            <Carousel centerMode emulateTouch showThumbs={false} autoPlay infiniteLoop centerSlidePercentage={60}>
                {caraouselItems}                
            </Carousel>
    )
}

export default SlideShow2;