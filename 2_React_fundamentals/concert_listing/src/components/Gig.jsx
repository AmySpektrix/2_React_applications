/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState }  from "react";
import "./gig.css";


const Gig = (props) => {
    return (
        <div className="gig">
            <img className="image" data-testid="image" src={props.src} alt={props.alt}></img>
            <h3 className="band_name" data-testid="band_name">{props.name}</h3>
            <p className="description" data-testid="description">{props.description}</p>
            <p className="time_date" data-testid="time_date">{props.time}</p>
            <p className="location" data-testid="location">{props.location}</p>
            <button data-testid="favourite" onClick={props.onFavouriteToggle}>{props.favourited ? "Favourite 🖤" : "Favourite 🤍"}</button>
        </div>
    );
};

export default Gig;


// import makersLogo from "../assets/Makers-Logo.png";

// const Gig = (props) => {
    
//     const favouriteToggle  = (props) => {
//         if (props.gig.favourite==0){
//             props.setGig(props.gig.favourite=1)
//         }
//         else {
//             props.setGig(0)
//         }
//     }

//     const favouriteValue = (props) => {
//         if (props.favourite==0){
//             return "Favourite 🤍"
//         }
//         else {
//             return "Favourite 🖤"
//         }
//     }

//     return (
//     <div className="gig">
//         <img className="image" data-testid="image" src={props.src} alt={props.alt}></img>
//         <h3 className="band_name" data-testid="band_name">{props.band_name}</h3>
//         <p classNamed="description" data-testid="description">{props.description}</p>
//         <p className="time_date" data-testid="time_date">{props.time_date}</p>
//         <p className="location"data-testid="location">{props.location}</p>
//         <button data-testid="favourite" onClick={favouriteToggle}>{favouriteValue()}</button>
//     </div>
//         );
// };

// export default Gig;