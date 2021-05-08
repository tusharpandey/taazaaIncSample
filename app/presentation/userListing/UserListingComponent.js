import React from 'react';
import {
    View, TextInput, Text, Pressable
} from 'react-native';
import GlobalStyle from '../util/GlobalStyle'
import { HorizontalSpacing_10 } from '../util/Spacing';
import GridComponent from './GridComponent';

const UserListingComponent = (props) => {
    return (<View style={{
        ...GlobalStyle.app_margin,
    }}>
        <View style={{ flexDirection: 'row' }}>
            <TextInput
                keyboardType="numeric"
                style={{
                    ...GlobalStyle.app_input_box_padding,
                    ...GlobalStyle.globalBorder,
                    flex: 1,
                }}
                underlineColorAndroid="transparent"
                placeholder="Search Count"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                value={props.searchText}
                onChangeText={props.handleText} />

            <HorizontalSpacing_10 />

            <Pressable
                onPress={props.onActionSearch}
                style={{
                    justifyContent: 'center',
                    ...GlobalStyle.globalBorder,
                    backgroundColor: 'grey',
                }}>
                <Text style={{ ...GlobalStyle.app_input_action_padding }}>{"Search"}</Text>
            </Pressable>
        </View>

        <GridComponent
            onItemPress={props.onItemPress}
            data={props.data} />

    </View>)
}

export default UserListingComponent