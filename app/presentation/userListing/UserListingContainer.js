import React from 'react';
import {
    View,
} from 'react-native';
import { getUserListing } from '../../core/useCase/GetUserListingUseCase';
import UserListingComponent from './UserListingComponent';

class UserListingContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchText: ""
        }
    }

    async componentDidMount() {
        
    }

    onActionSearch = () => {
        alert(this.state.searchText)
    }

    handleText = (text) => {
        this.setState({ searchText: text })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'yellow' }}>
                <UserListingComponent
                    handleText={this.handleText}
                    onActionSearch={this.onActionSearch}
                    searchText={this.state.searchText} />
            </View>
        )
    };
};

export default UserListingContainer;
