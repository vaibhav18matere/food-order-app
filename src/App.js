import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import RestaurantCard from "./components/RestaurantCard";

const AppLayout = () => {
     return (
          <div className="app">
               <Header />
               <SubHeader />
               <RestaurantCard />
          </div>
     )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);