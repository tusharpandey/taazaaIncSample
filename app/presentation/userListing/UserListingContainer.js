import React from 'react';
import {
    View,
} from 'react-native';
import { getUserListing } from '../../core/useCase/GetUserListingUseCase';

class UserListingContainer extends React.Component {

    async componentDidMount() {
        let userListing = await getUserListing(1)
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'yellow' }}>
            </View>
        )
    };
};

export default UserListingContainer;
