import React from 'react';
import {
    View, FlatList, Text, Pressable, StyleSheet, Image
} from 'react-native';
import { getDeviceWidth, getX } from '../util/XYRatio';
import GlobalStyle from '../util/GlobalStyle'

const numColumns = 2;
const size = (getDeviceWidth() - getX(38)) / numColumns;
const styles = StyleSheet.create({
    itemContainer: {
        width: size,
        height: size,
    },
    text: {
        color: 'white',
        position: 'absolute', bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: size, padding: 10
    }
});

const Item = (props) => {
    return (<View style={styles.itemContainer}>
        <Image source={{ uri: props.picture }} style={{ flex: 1 }} />
        <Text style={styles.text}>
            {props.name}</Text>
    </View >)
}

export default Grid = (props) => {

    return (
        <FlatList
            style={{ ...GlobalStyle.app_margin_vertical }}
            data={props.data}
            renderItem={({ item }) => (
                <Pressable onPress={() => { props.onItemPress(item.uuid) }}>
                    <Item name={item.name} 
                    picture={item.picture} />
                </Pressable>
            )}

            keyExtractor={item => item.uuid}
            numColumns={2} />
    );
}