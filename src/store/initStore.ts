import {InMemoryThingGateway} from "../adapters/InMemoryThingGateway";
import {configureStore} from "./store";

const thingGateway = new InMemoryThingGateway();
thingGateway.feedWith(
    [{name: 'things1'}, {name: 'things2'},  {name: 'things3'},  {name: 'things4'}]
);

export const initStore = () => {
    return configureStore( { thingGateway } );
}