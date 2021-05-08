import React from 'react';
import { View } from "react-native"
import { getX, getY } from './XYRatio';

export const HorizontalSpacing_10 = () => {
    return <View style={{ height: getY(1), width: getX(10) }} />
}