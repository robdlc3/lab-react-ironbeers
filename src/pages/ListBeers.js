import { useState, useEffect } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListBeers() {
    const [listBeers, setBeers] = useState([]);
    useEffect(() => {
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => {
                console.log('response.data', response.data);
                setBeers(response.data);
            });
    }, []);

    return (
        <div>
            {/* <Header /> */}
            <h1>All Beers</h1>
            {listBeers.map((beer) => {

                return (
                    <Link to={`/beer/${beer._id}`}>
                        <div key={beer._id}>
                            <img src={beer.image_url} alt={beer.name} />
                            <h3>{beer.name}</h3>
                            <p>{beer.tagline}</p>
                            <p>{beer.contributed_by}</p>
                            <hr />
                        </div>


                    </Link>

                )


            })
            }
        </div>
    );
}

export default ListBeers;
