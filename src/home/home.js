import React from 'react';
import './home.scss';
import Healthcare from 'healthcare/healthcare'
import { Link } from 'react-router-dom';

const Home = () =>{
    return <div className="home-wrapper">
            <div>
        <p>As we all know, we are in the wake of COVID-19. 
            We should not panic but be precautious. The only way we can help the society and ourselves is by practising social distancing. 
            Social Distancing is the key to help the world today. While staying at home can be indeed very monotonous, here are some of the things that can be fruitful during this time.</p>
         <p>To beat your free time, visit <Link to="/tips">Quarantine & Chill</Link> section.</p> 
         Things you can gain insight to:
         <ul>
            <li> Trending Netflix, Prime series</li>
            <li> All-time favorite movies to watch with family</li>
            <li> Bestseller books of 2020 </li>
        </ul>  

        <p>You can also <Link to="/blog">write to us</Link> and share your home qauarantine stories and get them published by your name. </p>
        </div>
        <Healthcare/>
        </div>
}

export default Home;