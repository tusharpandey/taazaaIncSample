const axios = require('axios');
import NetInfo from '@react-native-community/netinfo';

export async function getRequest(url) {
    let responseObject = ""
    try {
        responseObject = await axios.get(url);
        responseObject = responseObject.data
    } catch (error) {
        responseObject = { error: 101, errorMsg: "Please Check your internet connection" }
    }
    return responseObject
}

export async function checkInternetConnectivity() {
    let state = await NetInfo.fetch()
    return state.isConnected
}