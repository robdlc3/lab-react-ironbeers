import Header from "../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewBeer() {
    const [newBeer, setNewBeer] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: "",
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer)
            .then((result) => {
                console.log("result", result.data);
                navigate("/listbeers");
            })
            .catch((err) => console.log(err));
    };

    const handleTextChange = (e) => {
        setNewBeer((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleNumberChange = (e) => {
        setNewBeer((prev) => ({ ...prev, [e.target.name]: Number(e.target.value) }));
    };

    return (
        <div>
            <h1>New Beer</h1>

            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={newBeer.name} onChange={handleTextChange} />

                <label>Tagline</label>
                <input type="text" name="tagline" value={newBeer.tagline} onChange={handleTextChange} />

                <label>Description</label>
                <input type="text" name="description" value={newBeer.description} onChange={handleTextChange} />

                <label>First Brewed</label>
                <input type="text" name="first_brewed" value={newBeer.first_brewed} onChange={handleTextChange} />

                <label>Brewer Tips</label>
                <input type="text" name="brewers_tips" value={newBeer.brewers_tips} onChange={handleTextChange} />

                <label>Attenuation Level</label>
                <input type="number" name="attenuation_level" value={newBeer.attenuation_level} onChange={handleNumberChange} />

                <label>Contributed By</label>
                <input type="text" name="contributed_by" value={newBeer.contributed_by} onChange={handleTextChange} />

                <button type="submit">Add Beer</button>
            </form>
        </div>
    );
}

export default NewBeer;
