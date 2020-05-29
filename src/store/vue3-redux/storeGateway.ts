import {reactivitySelectorWrapper} from "./vueReactiveStore";
import {combineReducers, createStore, Store} from "redux";
import {inject} from "vue";
import {provide} from "@vue/runtime-core";

let store:Store;

export const storeProvider =
    (storeToProvide:Store) => {
        store = storeToProvide;
        return provide('store', storeToProvide);
    }

const storeChecker =
    (store:any) =>
        !store && console.error('[Err vue3-redux]: No store has been provided or instanciated')

export const storeInjector = () => {
    let tmp = inject<Store>('store')
    storeChecker(tmp)
    return tmp
}

export const useStore = () => ({ store })

export const useDispatch = () => store.dispatch

export const useSelector =
    (selector: Function) =>
        reactivitySelectorWrapper(() => selector(store.getState()), store);