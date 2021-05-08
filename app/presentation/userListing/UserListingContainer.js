import React from 'react';
import {
    View,
} from 'react-native';
import { getUserListing } from '../../core/useCase/UserUseCase';
import UserListingComponent from './UserListingComponent';

class UserListingContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            searchText: "",
            userListing: []
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    onActionSearch = () => {
        let text = this.state.searchText
        if (isNaN(text)) {
            alert("enter a numeric value")
            return
        }
        this.fetchData(text)
    }

    async fetchData(count = 10) {
        let response = await getUserListing(count)
        this.setState({ userListing: response })
    }

    handleText = (text) => {
        this.setState({ searchText: text })
    }

    onItemPress = (uuid) => {
        this.props.navigation.navigate('userDetail', { uuid: uuid })
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <UserListingComponent
                    onItemPress={this.onItemPress}
                    data={this.state.userListing}
                    handleText={this.handleText}
                    onActionSearch={this.onActionSearch}
                    searchText={this.state.searchText} />
            </View>
        )
    };
};

export default UserListingContainer;
