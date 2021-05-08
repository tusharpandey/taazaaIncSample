import React from 'react';
import {
    Image,
    ScrollView,
    View,
    Text
} from 'react-native';
import GlobalStyle from '../util/GlobalStyle'
import { getDeviceWidth, getX, getY } from '../util/XYRatio';

let size = getDeviceWidth() - getX(38)

const UserDetailComponent = (props) => {

    console.log("LOAD : " + JSON.stringify(props));

    return (
        <ScrollView>
            <View style={{
                flex: 1,
                ...GlobalStyle.app_margin,
            }}>
                <View style={{ width: size, height: size }}>
                    <Image source={{ uri: props.picture }}
                        style={{ flex: 1 }} />
                    <Text style={{
                        color: 'white',
                        position: 'absolute', bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        width: size, padding: 10
                    }}>
                        {props.name}
                    </Text>
                </View>
                <Text style={{ color: 'black', marginVertical: getY(10) }}>{"EMAIL : " + props.email}</Text>
                <Text style={{ color: 'black', marginVertical: getY(10) }}>{"DOB : " + props.dob}</Text>
                <Text style={{ color: 'black', marginVertical: getY(10) }}>{"LOCATION : " + props.location}</Text>
                <Text style={{ color: 'black', marginVertical: getY(10) }}>{"GENDER : " + props.gender}</Text>
                <Text style={{ color: 'black', marginVertical: getY(10) }}>{"PHONE : " + props.phone}</Text>
            </View>
        </ScrollView >)
}

export default UserDetailComponent