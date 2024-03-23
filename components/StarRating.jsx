import { Rating } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as starLine } from "@fortawesome/free-regular-svg-icons";
import { faStar as starFilled } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ value, ...props }) => {
  return (
    <Rating
      value={Math.round(value)}
      ratedIcon={<FontAwesomeIcon icon={starFilled} className="h-4 w-4" />}
      unratedIcon={<FontAwesomeIcon icon={starLine} className="h-4 w-4" />}
      {...props}
    />
  );
};

export default StarRating;
