import Header from '../components/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RandomBeer = () => {
    const [beer, setBeer] = useState(null);

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then((response) => {
                console.log('response.data', response.data);
                setBeer(response.data);
            })
            .catch(error => {
                console.log(error)
            });
    }, []);

    return (
        <>
            {
                beer ?
                    <div>
                        <img src={beer.image_url} alt={beer.name} />
                        <h1> {beer.name}</h1>
                        <h2>{beer.tagline}</h2>
                        <p> First brewed: {beer.first_brewed}</p>
                        <p>Attenuation level: {beer.attenuation_level}</p>
                        <p>{beer.description}</p>
                        <p>Contributed by: {beer.contributed_by}</p>


                    </div>

                    : <p>loading</p>

            }
        </>

    )
}

export default RandomBeer