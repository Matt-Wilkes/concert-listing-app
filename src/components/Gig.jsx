import { useState, React } from "react";
import "../Gig.css";
import LikeButton from "./LikeButton";

const Gig = (props) => {
//   const [favourite, setFavourite] = useState(props.favourite);

  return (
    <>
      <div className="Gig">
        <h3 className="bandName">{props.bandName}</h3>
        <img className="bandImage" src={props.bandImage} alt="artwork"></img>
        <p className="description" data-testid="t-description">
          {props.description}
        </p>
        <p className="eventDateTime" data-testid="t-eventDateTime">
          {props.eventDateTime}
        </p>
        <p className="location" data-testid="t-location">
          {props.location}
        </p>
        <LikeButton
          id={props.id}
          gigs={props.gigs}
          favouriteGigs={props.favouriteGigs}
          setFavouriteGigs={props.setFavouriteGigs}
          favourite={props.favourite}
          setFavourite={props.setFavourite}
        />
      </div>
    </>
  );
};

export default Gig;
