import React from 'react';
import {
    View,
} from 'react-native';
import { readUserDetailFromListing } from '../../core/useCase/UserUseCase';
import UserDetailComponent from './UserDetailComponent';

class UserDetailContainer extends React.Component {

    constructor(props) {
        super(props)
        this.uuid = this.props.route.params.uuid
        this.state = { userObject: {} }
    }

    async componentDidMount() {
        let detail = await readUserDetailFromListing(this.uuid)
        this.setState({ userObject: detail })
    }

    render() {

        return (
            <UserDetailComponent
                uuid={this.state.userObject.uuid}
                gender={this.state.userObject.gender}
                name={this.state.userObject.name}
                location={this.state.userObject.location}
                email={this.state.userObject.email}
                dob={this.state.userObject.dob}
                phone={this.state.userObject.phone}
                picture={this.state.userObject.picture}
            />
        )
    };
};

export default UserDetailContainer;
