import {InMemoryThingGateway} from '../adapters/InMemoryThingGateway'
import {configureStore} from "../store/store";
import {AppState} from "../store/appState";
import {Store} from "redux";
import {retrieveThings} from "./thingsRetrieval";
import 'jest';

describe('Things retrieval', () => {

    let store: Store<AppState>;
    let thingGateway: InMemoryThingGateway;

    beforeEach(() => {
        thingGateway = new InMemoryThingGateway();
        store = configureStore({thingGateway});
    });

    it('should not retrieve any thing when none exists', (done: any) => {
        listenToChangedState(({
                things: {
                    data: [],
                    fetching: false
                }
            }), done, 2
        );
        retrieve();
    });

    it('should retrieve some things', (done: any) => {
        thingGateway.feedWith([{name: 'thing 1'}]);
        listenToChangedState(({
                things: {
                    data: [{name: 'thing 1'}],
                    fetching: false
                }
            }), done, 2
        );
        retrieve();
    });

    it('should track the things retrieval', (done: any) => {
        listenToChangedState(({
                things: {
                    data: [],
                    fetching: true
                }
            }), done, 1
        );
        retrieve();
    });

    const retrieve = () => {
        store.dispatch<any>(retrieveThings());
    };

    const listenToChangedState = (expectedState: AppState, done: () => void, actionPosition: number) => {
        let counter = 1;
        store.subscribe(() => {
            if (counter === actionPosition) {
                expect(store.getState())
                done();
            }
            counter++;
        });
    };

});