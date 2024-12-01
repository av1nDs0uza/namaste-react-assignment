import resList from "../utils/mockdata";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const {resData} = props;

    const { 
    cloudinaryImageId, 
    name, 
    avgRating,
    cuisines,
    costForTwo,
    sla} = resData?. info;

    return(
        <div className="res-card">
            <img 
            className="res-logo" 
            alt="res-logo" 
            src={CDN_URL+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <p><b>{cuisines.join(", ")}</b></p>
            <p><b>Rating: {avgRating}</b></p>
            <p><b>{costForTwo}</b></p>
            <p><b>Delivery: {sla.deliveryTime} mins</b></p>
            

        </div>
    )
};

export default RestaurantCard;