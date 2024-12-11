import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";




const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]); // Original data
    const [listOfRestaurants, setListOfRestaurant] = useState([]); // Displayed data
    const [searchText, setSearchText] = useState("");
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.159014&lng=72.9985686&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
  
      const json = await data.json();
      console.log(json);
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setAllRestaurants(restaurants); // Set original data
      setListOfRestaurant(restaurants); // Set displayed data
    };
  
    if (listOfRestaurants.length === 0) {
      return <Shimmer />;
    }
  
    return (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="search-btn"
              onClick={() => {
                const filteredRestaurant = allRestaurants.filter((res) =>
                  res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                );
                setListOfRestaurant(filteredRestaurant); // Update the displayed data
              }}
            >
              Search
            </button>
          </div>
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = allRestaurants.filter(
                (res) => res?.info?.avgRating > 4.3
              );
              setListOfRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="reset"
            onClick={() => {
              setListOfRestaurant(allRestaurants); // Reset to original data
            }}
          >
            Reset
          </button>
        </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Body;
  