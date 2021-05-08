import React from 'react';
import {
    View,
} from 'react-native';
import { readUsers } from '../../core/data/DBRepository/database/Users';
import { getUserListing } from '../../core/useCase/GetUserListingUseCase';
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

    render() {
        return (
            <View style={{ flex: 1 }}>
                <UserListingComponent
                    data={this.state.userListing}
                    handleText={this.handleText}
                    onActionSearch={this.onActionSearch}
                    searchText={this.state.searchText} />
            </View>
        )
    };
};

export default UserListingContainer;
