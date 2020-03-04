import {retrieveRestaurants} from "../../../../corelogic/usecases/restaurantsRetrieval";
import * as React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurantsSelector} from "./selectors";

export const RestaurantsList = () => {

    const dispatch = useDispatch();
    const restaurants = useSelector(getRestaurantsSelector);

    useEffect(() =>
        dispatch<any>(retrieveRestaurants()), []);

    const {data, fetching} = restaurants;

    return <div>
        {fetching ? <div>Loading ...</div> : <>
            {data.map(r => <li key={r.name}>{r.name}</li>)}
        </>
        }
    </div>;
};