import {request, METHOD} from "../utils/request";
import {ExpertAll} from './api'

export const getExpertAll = () => {
    return request(ExpertAll, METHOD.GET);
}
