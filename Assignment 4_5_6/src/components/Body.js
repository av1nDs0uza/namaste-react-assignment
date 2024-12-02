import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";



const Body = () => {
    const [listOfRestaurants, setListOfRestaurant] = useState(resList);
    return(
        <div className="body">
            <div className="search">
                <button className="filter-btn" 
                onClick={() => {
                
                    // Filter Logic here
                    const filteredList = listOfRestaurants.filter(
                      (res) => res.info.avgRating > 4.6
                    );
                    setListOfRestaurant(filteredList);
                    } }
                > Top Rated Restaurants 
                </button>
                <button className="reset"
                onClick={() => {
                    setListOfRestaurant(resList);
                  }}
                > Reset 
                </button>

            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id}resData={restaurant}/>
                ))}
            
            </div>
        </div>
    )
};

export default Body;