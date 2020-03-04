import {RestaurantGateway} from "../../corelogic/gateways/restaurantGateway";
import {Restaurant} from "../../corelogic/models/restaurant";

export class InMemoryRestaurantGateway implements RestaurantGateway {

    private readonly restaurants: Restaurant[] = [];

    async retrieve(): Promise<Restaurant[]> {
        return this.restaurants;
    }

    feedWith(restaurants: Restaurant[]) {
        this.restaurants.push(...restaurants);
    }
}