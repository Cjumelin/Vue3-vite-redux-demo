import {provide} from "@vue/runtime-core";
import {InjectionKey} from "vue";

const StoreSymbol: InjectionKey<string> = Symbol()
export const storeProvider = () => provide(StoreSymbol, 'store');