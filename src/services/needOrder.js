import {request, METHOD} from "../utils/request";
import {BASE_URL_IP} from './api'

export const getNeedAll = () => {
    const url = `${BASE_URL_IP}/api/need/getall`;
    return request(url, METHOD.GET);
}

export const getOrder = (id, method) => {
    const url = `${BASE_URL_IP}/api/order/byneed/${id}`
    return request(url, method);
}

export const deleteNeed = (id, method) => {
    const url = `${BASE_URL_IP}/need/${id}/delete`
    return request(url, method)
}

export const deleteOrder = (id, method) => {
    const url = `${BASE_URL_IP}/admin/order/${id}`
    return request(url, method)
}
