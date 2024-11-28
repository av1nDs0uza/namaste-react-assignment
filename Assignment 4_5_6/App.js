import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * -Logo
 * -Nav Items
 * Body
 * -Search
 * -RestaurantContainer
 *  -resturantCard
 * Footer
 * -Copyrignt
 * -Links
 * -Address
 * -Contact
 * 
 * 
 */

const Header = () => {
    return(
        <div className="header">
            <div>
                <img class="logo"  alt="restaurant logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=restaurant-food&sf=&txt_keyword=All" />
            </div>
            <div className="nav-items">
                <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>🛒</li>
                </ul>
            </div>

        </div>

    )
};

const styleCard = {
    background: "#f0f0f0"
}

const RestaurantCard = () => {
    return(
        <div className="res-card" style ={styleCard}>
            <img 
            className="res-logo" 
            alt="res-logo" 
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x4uyxvihmg8qa3pddkgf"
            />
            <h3>Meghna Foods</h3>
            <h4>Biryani</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
            

        </div>
    )
};

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            </div>
        </div>
    )
};

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Body />
            
            
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);