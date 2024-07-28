const LikeButton = (props) => {
  const favouriteIconPath = window.location.origin + "/src/assets/";
  const isFavourite = props.favourite ? "heart_green.svg" : "heart_black.svg";

  const handleFavourite = (event) => {
    const targetId = event.target.id;
    console.log(event.target.src);

    const result = props.favouriteGigs.filter((gig) => {
      return gig.id == targetId;
    });

    const handleFavouriteRemove = async () => {
      await props.setFavouriteGigs((f) =>
        f.filter((gig, index) => gig.id != targetId)
      );
      props.setFavourite(false);
    
    };

    const handleFavouriteAdd = async () => {
      const gig = await props.gigs.filter((gig) => {
        return gig.id == targetId;
      });
      await props.setFavouriteGigs((f) => [...f, gig[0]]);
      props.setFavourite(true);
    };

    result[0] ?  handleFavouriteRemove() : handleFavouriteAdd();
  };

  return (
    <img
      id={props.id}
      className="favourite"
      onClick={handleFavourite}
      src={favouriteIconPath + isFavourite}
    ></img>
  );
};

export default LikeButton;
