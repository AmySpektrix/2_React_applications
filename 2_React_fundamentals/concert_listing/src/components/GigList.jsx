// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState }  from "react";
import Gig from "./Gig";
// import wavingQuackie from "../assets/waving-quackie.png";
// import partyQuackie from "../assets/party-quackie.png";

const GigList = () => {
  // Define state to manage gigs
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    const URL ="https://makers-gig-backend.onrender.com/events"
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
          setGigs(data);}
          );
      }, []);

  // Function to toggle favourite status of a gig
  const toggleFavourite = (gigId) => {
    setGigs(gigs.map(gig => 
      gig.event_id === gigId? { ...gig, favourited: !gig.favourited } : gig
    ));
  }; // iterates over all teh gigs, if the gig which has the id 

  return (
    <>
      <h2>Favorited Gigs</h2>
      <div className="container">
      {gigs.filter(gig => gig.favourited).map(gig => (
        <Gig
          key={gig.event_id}
          {...gig}
          onFavouriteToggle={() => toggleFavourite(gig.event_id)}
        />
      ))}
      </div>
      <h2>All Gigs</h2>
      <div className="container">
      {gigs.filter(gig => !gig.favourited).map(gig => (
        <Gig
          key={gig.event_id}
          {...gig}
          onFavouriteToggle={() => toggleFavourite(gig.event_id)}
          />
      ))}
      </div>
    </>
  );
};

export default GigList;
// import React, { useState }  from "react";
// import "./gig.css"
// import { useState } from "react";
// // import makersLogo from "../assets/Makers-Logo.png";

// const GigList = (props) => {
//     const [gigs, setGig] = useState(props.gigs);

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