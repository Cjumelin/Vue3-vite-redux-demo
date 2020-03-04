import {default as React} from "react";
import {useSelector} from "react-redux";
import {getNumberOfRestaurants} from "./restaurantslist/selectors";

export const RestaurantsCounter = () => {

    const numberOfRestaurants = useSelector(getNumberOfRestaurants);

    return <div>
        <h3>Il y a {numberOfRestaurants} restaurants</h3>
    </div>;
};