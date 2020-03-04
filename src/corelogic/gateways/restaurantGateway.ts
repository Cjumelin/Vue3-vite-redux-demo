import {Restaurant} from "../models/restaurant";

export interface RestaurantGateway {
    retrieve(): Promise<Restaurant[]>;
}