import React from 'react';
import './entertainment.scss';
import GoodNewz from '../../assets/images/prime/GoodNewz.jpg';
import Test from '../../assets/images/prime/Test.jpg';
import Hunters from '../../assets/images/prime/Hunters.jpg';
import Street from '../../assets/images/prime/StreetDancer.jpg';
import Aquaman from '../../assets/images/prime/Aquaman.jpg';
import SlideShowCarousel from './SlideShowCarousel';
import SlideShow from './slideshow2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faTv } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';

const Entertainment = (props) => {
    const titlesList = props.data.shows.map((item, index) => {
        return <div key={index} className="listing">
            <a className="title colorBlack" href={item.src}><FontAwesomeIcon style={{ fontSize: "22px", marginLeft: "10px", marginRight: "5px", marginTop: "6px"}} icon={faTv} />{item.title}</a>
            <div>
                <div className="rating">
                    Imdb Rating: {item.rating}
                </div>
                <div className="rating">
                    Starring: {item.starring}
                </div>
                <div className="rating">
                    Genres: {item.genres}
                </div>
                {item.episodes && <div className="rating">
                    Episodes: {item.episodes}
                </div>}
                {item.app && <div className="rating">
                    App: {item.app}
                </div>}
                <div className="description">
                    {item.description}
                </div>
                <Button color="secondary" size="lg" className="buttonLayot"><a className="title" href={item.src}>Watch Now</a></Button>
            </div>
        </div>
    })
    return (
        <div className="entertainment">
            <div className="heading">
                Trending on {props.heading}!
            </div>
            <hr/>
            <div className="shortDescription">
                {props.data.shortDescription}
            </div>
            <div className="bodySection col-sm-12">
                <div>
                    <SlideShow items={props.data.shows} />
                </div>
                <div>
                    <div style={{ textAlign: 'center', marginTop: "20px" }}>
                        {titlesList}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Entertainment;