import React from 'react';
import { Link } from 'react-router-dom';
import allbeersImage from '../assets/beersPic.png';
import randombeerImage from '../assets/random-beer.png';
import newbeerImage from '../assets/new-beer.png';




const Home = () => {
    return (
        <div>
            <h1>Welcome to IronBeers!</h1>
            <div>
                <img src={allbeersImage} alt="all beers image" />
                <Link to="/ListBeers">AllBeers</Link>
            </div>
            <div>
                <Link to="/RandomBeer" >Random Beer</Link>
                <img src={randombeerImage} alt="random beers" />
            </div>
            <div>
                <Link to="/NewBeer" >New Beer</Link>
                <img src={newbeerImage} alt="new beer" />
            </div>
        </div >
    );
};

export default Home;
