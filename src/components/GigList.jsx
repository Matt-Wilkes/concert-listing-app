import { useState, React } from "react";
import Gig from "./Gig";
import LikeButton from "./LikeButton";

let imageURL = window.location.origin + "/src/assets/";

const GigList = () => {

  // const [favourite, setFavourite] = useState(false);

  const [favouriteGigs, setFavouriteGigs] = useState([
  ]);


// maybe I can destructure and assign the favourite the value of the favourite state?
  const [gigs, setGigs] = useState([
    {
      id: 0,
      bandName: "Robot Rendezvous",
      bandImage: imageURL + "robot_rendezvous2.webp",
      description: "French Electronic robot duo debut their new single",
      eventDateTime: new Date(2024, 7, 20, 20, 0).toLocaleString("en-GB", {
        timeZone: "Europe/London",
      }),
      location: "London, UK"
    },
    {
      id: 1,
      bandName: "Dog Drummers",
      bandImage: imageURL + "dogDrummers.webp",
      description: "German Punk electro-pop band Dog Drummers return to London",
      eventDateTime: new Date(2024, 7, 20, 18, 0).toLocaleString("en-GB", {
        timeZone: "Europe/London",
      }),
      location: "London, UK"
    },
    {
      id: 2,
      bandName: "Favourite Band",
      bandImage: imageURL + "makers-logo.png",
      description: "Favourite band",
      eventDateTime: "08/08/2024",
      location: "London, UK"
    },
    {
      id: 3,
      bandName: "Favourite Band 2",
      bandImage: imageURL + "makers-logo.png",
      description: "Favourite band 2",
      eventDateTime: "08/08/2024",
      location: "London, UK"
    }
  ]);

  return (
    <>
    <div className="Favourites">
      <h1>Favourites</h1>
      {favouriteGigs.map(gig => {
        return (
          <Gig
              id={gig.id}
              bandName={gig.bandName}
              bandImage={gig.bandImage}
              description={gig.description}
              eventDateTime={gig.eventDateTime}
              location={gig.location}
              setFavouriteGigs={setFavouriteGigs}
              favouriteGigs={favouriteGigs}
              gigs={gigs}
              favourite={true}
              />
        );
      })}
    </div>
    <div className="allGigs">
        <h1>All Gigs</h1>
        {gigs.map((gig) => {
          return (
            <Gig
              id={gig.id}
              bandName={gig.bandName}
              bandImage={gig.bandImage}
              description={gig.description}
              eventDateTime={gig.eventDateTime}
              location={gig.location}
              setFavouriteGigs={setFavouriteGigs}
              favouriteGigs={favouriteGigs}
              gigs={gigs}
              favourite={false}
              />
          );
        })}
      </div>
      </>
  );
};

export default GigList;
