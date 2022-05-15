import {request, METHOD} from "../utils/request";
import {BASE_URL_IP} from './api'

export const getFeedbackAll = () => {
    const url = `${BASE_URL_IP}/api/feedback/getall`;
    return request(url, METHOD.GET);
}
