import React from "react";
import ReactDOM from "react-dom";

const Header=()=>{
    return <div className="header"> 
        <div className="logo-container">
            <img className="logo" src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg?semt=ais_hybrid"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
}

const RestaurantCard=()=>{
    return <div className="res-card">
        <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2bd275014179275d14981a289723f4f2" alt="res-logo"/>
        <h3>Kritunga</h3>
        <h4>South Indian, North Indian, Tandori</h4>
        <h4>4.4 Stars</h4>
        <h5>35 min</h5>
    </div>
}
const Body=()=>{
    return <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
    </div>
}

const AppLayout=()=>{
    return <div className="main">
        <Header/>
        <Body/>
    </div>
}

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)