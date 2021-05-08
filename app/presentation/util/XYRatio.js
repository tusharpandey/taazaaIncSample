import { Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const height = 812;
const width = 375;

export function getX(dimen) {
    var percentage = (dimen / width)
    let value = percentage * screenWidth;
    return value;
}

export function getY(dimen) {
    var percentage = (dimen / height)
    let value = percentage * screenHeight;
    return value
}

export function getDeviceWidth() {
    return Math.round(Dimensions.get('window').width)
}

export function getDeviceHeight() {
    return Math.round(Dimensions.get('window').height)
}
