import {getThingsSelector} from "./selector";
import {retrieveThings} from "../../useCases/thingsRetrieval";
import {useDispatch, useSelector, useStore} from "../../store/storeGateway";
import {onMounted, computed, ref} from 'vue';

export const fetchThingsList = () => {
    const dispatch = useDispatch();

    const things = useSelector(getThingsSelector);

    onMounted(() => {
        dispatch<any>(retrieveThings());
    })

    return things;
}
