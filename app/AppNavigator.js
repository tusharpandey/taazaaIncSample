import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserDetailContainer from './presentation/userDetails/UserDetailContainer';
import UserListingContainer from './presentation/userListing/UserListingContainer';

const Stack = createStackNavigator();

export default AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="userListing">
                <Stack.Screen
                    name="userListing"
                    component={UserListingContainer}
                    options={{ title: 'User Listing' }}
                />
                <Stack.Screen
                    name="userDetail"
                    component={UserDetailContainer}
                    options={{ title: 'User Detail' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

