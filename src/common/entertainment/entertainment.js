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
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Entertainment = () => {
    const primeItems = [
        {
            title: 'Good Newz',
            rating: '6.9',
            starring: 'Akshay Kumar, Kareena Kapoor, Diljit Dosanjh, Kiara Advani',
            src: 'https://www.primevideo.com/',
            img: GoodNewz,
            youtubeLink: 'https://www.youtube.com/embed/r9VJpqoAr84',
            description: 'Two couples with the same surnames pursue in-vitro fertilization and wait for their upcoming babies. Trouble ensues when they find that the sperms of each couple have been mixed with each other.',
            genres: 'Comedy, Drama, International'
        },
        {
            title: 'The Test',
            rating: '9.2',
            starring: 'Justin Langer, Tim Paine, Nathan Lyon, Pat Cummins, Usman Khwaja...',
            src: 'https://www.primevideo.com/',
            img: Test,
            youtubeLink: 'https://www.youtube.com/embed/a9g8exCgVP4',
            description: 'The Test: A New Era for Australia’s Team, is a docuseries following the Australian Men’s Cricket Team, offering a behind-the-scenes look at how one of the world’s best cricket teams fell from grace and was forced to reclaim their title and integrity.',
            genres: 'Documentary, Sport'
        },
        {
            title: 'Hunters',
            rating: '7.2',
            starring: 'Al Pacino, Logan Lerman, Jerrica Hinton, LEna Olin',
            src: 'https://www.primevideo.com/',
            img: Hunters,
            youtubeLink: 'https://www.youtube.com/embed/HBGkjmfIzAw',
            description: 'Inspired by true events, HUNTERS follows a rag-tag team of Nazi Hunters in 1977 New York City who discover that hundreds of escaped Nazis are living in America. And so, they do what any bad-ass vigilante squad would do: they set out on a bloody quest for revenge and justice. But they soon discover a far-reaching conspiracy and must race against time to thwart the Nazis’ new genocidal plans.',
            genres: 'Crime, Drama, Mystery '
        },
        {
            title: 'Aquaman',
            rating: '7.0',
            starring: 'Jason Mamao, Amber Heard, William Dafoe, Patrick Wilson',
            src: 'https://www.primevideo.com/',
            img: Aquaman,
            youtubeLink: 'https://www.youtube.com/embed/WDkg3h8PCVU',
            description: '“Aquaman” reveals the origin story of half-human, half-Atlantean Arthur Curry and takes him on the journey of his lifetime-to discover if he is worthy of who he was born to be…a king.',
            genres: 'Adventure, Action, Science Fiction, Fantasy'
        },
        {
            title: 'Street Dancer',
            rating: '6.0',
            starring: 'Varun Dhawan, Shraddha Kapoor, Prabhu Deva',
            src: 'https://www.primevideo.com/',
            img: Street,
            youtubeLink: 'https://www.youtube.com/embed/2Ym7LJv6L_c',
            description: 'A dance epic based on the multifarious colors of dance and the unity that occurs between two different groups coming together for a single cause. Set in London, the film is about 2 rival dance groups from India and Pakistan, who\'ve been competing against each other every time they meet.',
            genres: 'Drama'

        }
    ]

    const titlesList = primeItems.map((item, index) => {
        return <li key={index}>
            <a className="title" href={item.src}>{item.title} <FontAwesomeIcon style={{ fontSize: "30px", marginLeft: "20px"}} icon={faArrowRight} /></a>
            <p>
                <div className="rating">
                    Imdb Rating: {item.rating}
                </div>
                <div className="rating">
                    Starring: {item.starring}
                </div>
                <div className="rating">
                    Genres: {item.genres}
                </div>
                <div className="description">
                    {item.description}
                </div>
            </p>
        </li>
    })
    return (
        <div className="entertainment">
            <div className="heading">
                Trending on Amazon Prime!
            </div>
            <hr/>
            <div className="bodySection">
                <div className="col-sm-12">
                    <SlideShow items={primeItems} />
                </div>
                <div className="col-sm-12">
                    <div style={{ textAlign: 'center' }}>
                        <ol>
                            {titlesList}
                        </ol>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Entertainment;