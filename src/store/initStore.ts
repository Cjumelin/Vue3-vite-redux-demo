import {InMemoryThingGateway} from "../adapters/InMemoryThingGateway";
import {configureStore} from "./store";
import {storeProvider} from "./vue3-redux/storeGateway";

const thingGateway = new InMemoryThingGateway();
thingGateway.feedWith(
    [{name: 'things1'}, {name: 'things2'},  {name: 'things3'},  {name: 'things4'}]
);

export const initStore = () => {
    console.log('titi')
    return configureStore( { thingGateway } );
}