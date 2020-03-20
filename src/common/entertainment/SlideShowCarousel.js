import React from 'react';
import {Carousel} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SlideShowCarousel = ({ items }) => {
    const caraouselItems = items.map(item => {
        return (
            <Carousel.Item>
                <img
                    className="d-block slideImage"
                    src={item.img}
                    alt="slide"
                />
                <Carousel.Caption>
                    <a className="title" href={item.src}>{item.title} <FontAwesomeIcon style={{ fontSize: "30px", marginLeft: "20px"}} icon={faArrowRight} /></a>
                    <p>
                        <div className="rating">
                            Imdb Rating: {item.rating}
                        </div>
                        <div className="rating">
                            Starring: {item.starring}
                        </div>
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        )
    })
    return (
        <Carousel>
            {caraouselItems}                
        </Carousel>
    )
}

export default SlideShowCarousel;