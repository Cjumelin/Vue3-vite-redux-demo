import {provide} from "@vue/runtime-core";
import { InjectionKey, inject } from 'vue'
import {configureStore} from "../store/store";
import {reactivitySelectorWrapper} from "./vueReactiveStore";
import {InMemoryThingGateway} from "../adapters/InMemoryThingGateway";

const thingGateway = new InMemoryThingGateway();
thingGateway.feedWith(
    [{name: 'things1'}, {name: 'things2'},  {name: 'things3'},  {name: 'things4'}]
);

let store = configureStore( { thingGateway } );

export const useStore = () => ({ store })

export const useSelector =
    (selector: Function) =>
        reactivitySelectorWrapper(() => selector(store.getState()), store);

export const useDispatch =
    () => store.dispatch