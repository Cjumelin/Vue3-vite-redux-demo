import {getThingsSelector} from "./selector";
import {retrieveThings} from "../../useCases/thingsRetrieval";
import {useDispatch, useSelector} from "../../store/vue3-redux/storeGateway";
import {onMounted} from 'vue';

export const fetchThingsList = () => {
    const dispatch = useDispatch();

    const things = useSelector(getThingsSelector);

    onMounted(() => {
        dispatch<any>(retrieveThings());
    })

    return things;
}
