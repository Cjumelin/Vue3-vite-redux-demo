import React from 'react';
import './App.css';
import {RestaurantsList} from "./adapters/primairies/uicomponents/restaurantslist/restaurantsList.component";
import {RestaurantsCounter} from "./adapters/primairies/uicomponents/restaurantsCounter.component";

function App() {

    return (
        <div className="App">
            <RestaurantsList />
            <RestaurantsCounter />
        </div>
    );
}

export default App;
