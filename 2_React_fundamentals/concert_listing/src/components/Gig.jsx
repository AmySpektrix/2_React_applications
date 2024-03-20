import React from "react";
import "./gig.css"
import { useState } from "react";
// import makersLogo from "../assets/Makers-Logo.png";

const Gig = (props) => {
    const [favourite, setFavourite] = useState(0);
    
    const favouriteToggle  = () => {
        if (favourite==0){
            setFavourite(1)
        }
        else {
            setFavourite(0)
        }
    }

    const favouriteValue = () => {
        if (favourite==0){
            return "Favourite 🤍"
        }
        else {
            return "Favourite 🖤"
        }
    }

    return (
    <div className="gig">
        <img className="image" data-testid="image" src={props.src} alt={props.alt}></img>
        <h3 className="band_name" data-testid="band_name">{props.band_name}</h3>
        <p classNamed="description" data-testid="description">{props.description}</p>
        <p className="time_date" data-testid="time_date">{props.time_date}</p>
        <p className="location"data-testid="location">{props.location}</p>
        <button data-testid="favourite" onClick={favouriteToggle}>{favouriteValue()}</button>
    </div>
        );
};

export default Gig;