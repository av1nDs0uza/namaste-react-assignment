import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/contact";
import { createBrowserRouter,Outlet, RouterProvider } from "react-router-dom";

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



const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            <Outlet />
            
            
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path:"/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
                errorElement: <Error />
            },
            {
                path: "/contact",
                element: <Contact />,
                errorElement: <Error />
            },

        ],
        errorElement: <Error />,
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);