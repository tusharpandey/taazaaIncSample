import React from 'react';
import {
    View, TextInput, Text, Pressable, ActivityIndicator
} from 'react-native';
import GlobalStyle from '../util/GlobalStyle'
import { HorizontalSpacing_10 } from '../util/Spacing';
import GridComponent from './GridComponent';

const UserListingComponent = (props) => {
    return (<View style={{
        flex: 1,
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

        {props.isLoading && <ActivityIndicator animating={props.isLoading} style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 }} />}

        {!props.isLoading && <GridComponent
            onItemPress={props.onItemPress}
            data={props.data} />}

    </View>)
}

export default UserListingComponent