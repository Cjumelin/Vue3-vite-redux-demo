import {InMemoryRestaurantGateway} from "../../adapters/secondaries/InMemoryRestaurantGateway";
import {retrieveRestaurants} from "./restaurantsRetrieval";
import {AppState} from "../../store/appState";
import {Store} from "redux";
import {configureStore} from "../../store/store";


describe('Restaurants retrieval', () => {

    let store: Store<AppState>;
    let restaurantGateway: InMemoryRestaurantGateway;

    beforeEach(() => {
        restaurantGateway = new InMemoryRestaurantGateway();
        store = configureStore({restaurantGateway});
    });

    it('should not retrieve any restaurant when none exists', done => {
        listenToChangedState(({
                restaurants: {
                    data: [],
                    fetching: false
                }
            }), done, 2
        );
        retrieve();
    });

    it('should retrieve some restaurants', done => {
        restaurantGateway.feedWith([{name: 'The Shine'}]);
        listenToChangedState(({
                restaurants: {
                    data: [{name: 'The Shine'}],
                    fetching: false
                }
            }), done, 2
        );
        retrieve();
    });

    it('should track the restaurants retrieval', done => {
        listenToChangedState(({
                restaurants: {
                    data: [],
                    fetching: true
                }
            }), done, 1
        );
        retrieve();
    });

    const retrieve = () => {
        store.dispatch<any>(retrieveRestaurants());
    };

    const listenToChangedState = (expectedState: AppState, done: () => void, actionPosition: number) => {
        let counter = 1;
        store.subscribe(() => {
            if (counter === actionPosition) {
                expect(store.getState()).toEqual(expectedState);
                done();
            }
            counter++;
        });
    };

});