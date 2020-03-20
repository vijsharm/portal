import React from 'react';
import './entertainment.scss';
import GoodNewz from '../../assets/images/prime/GoodNewz.jpg';
import Test from '../../assets/images/prime/Test.jpg';
import Hunters from '../../assets/images/prime/Hunters.jpg';
import Street from '../../assets/images/prime/StreetDancer.jpg';
import Aquaman from '../../assets/images/prime/Aquaman.jpg';
import SlideShowCarousel from './SlideShowCarousel';

const Entertainment = () => {
    const primeItems = [
        {
            title: 'Good Newz',
            rating: '6.9',
            starring: 'Akshay Kumar, Kareena Kapoor, Diljit Dosanjh, Kiara Advani',
            src: 'https://www.primevideo.com/',
            img: GoodNewz
        },
        {
            title: 'The Test',
            rating: '9.2',
            starring: 'Justin Langer, Tim Paine, Nathan Lyon, Pat Cummins, Usman Khwaja...',
            src: 'https://www.primevideo.com/',
            img: Test
        },
        {
            title: 'Hunters',
            rating: '7.2',
            starring: 'Al Pacino, Logan Lerman, Jerrica Hinton, LEna Olin',
            src: 'https://www.primevideo.com/',
            img: Hunters
        },
        {
            title: 'Aquaman',
            rating: '7.0',
            starring: 'Jason Mamao, Amber Heard, William Dafoe, Patrick Wilson',
            src: 'https://www.primevideo.com/',
            img: Aquaman
        },
        {
            title: 'Street Dancer',
            rating: '6.0',
            starring: 'Varun Dhawan, Shraddha Kapoor, Prabhu Deva',
            src: 'https://www.primevideo.com/',
            img: Street
        }
    ]
    return (
        <div className="entertainment">
            <div className="heading">
                Trending on Amazon Prime!
            </div>
            <hr/>
            <div className="bodySection">
                <SlideShowCarousel items={primeItems} />
            </div>

        </div>
    )
}

export default Entertainment;