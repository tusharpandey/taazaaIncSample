import { getRequest } from "../network/Network";
import { GET_USER_LIST } from "../network/Urls";

export function getDataFromApi(requestData) {
    return getRequest(GET_USER_LIST + requestData)
}