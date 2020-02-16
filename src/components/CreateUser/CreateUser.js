import React, { Component } from 'react';

import { createUser } from '../../backend/democrewcy';

import Header from '../Common/Header'
import RedAlert from '../Common/RedAlert';
import PasswordInput from '../Common/PasswordInput';
import TextInput from '../Common/TextInput';
import DateInput from '../Common/DateInput';
import EmailInput from '../Common/EmailInput';
import PrimaryButton from '../Common/PrimaryButton';

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                birthDate: '',
            },
            message: null,
        };
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setMessage(message) {
        const state = Object.assign({}, this.state);
        state.message = message;
        this.setState(state);
    }

    handleChangeText(e) {
        const state = Object.assign({}, this.state);
        const user = Object.assign({}, this.state.user);
        state.user = user;
        state.user[e.target.id] = e.target.value;

        this.setState(state);
    }

    async handleSubmit(e) {
        e.preventDefault();

        const payload = Object.assign({}, this.state.user);
        payload.className = 'User';
        console.log(JSON.stringify(payload, null, 2));

        try {
            await createUser(payload);
            this.props.onCreateUserSuccess();
        }
        catch (error) {
            this.setMessage(error.message);
        }
    }

    render() {
        return (
            <div>
                <Header 
                    onClick={this.props.onClickHome}
                />
                <div className="container">
                    <h4>Create User</h4>
                    <RedAlert 
                        message={this.state.message}
                    />
                    <form>
                        <TextInput
                            id="firstName"
                            label="First Name"
                            value={this.state.user.firstName}
                            onChange={this.handleChangeText}
                        />
                        <TextInput
                            id="lastName"
                            label="Last Name"
                            value={this.state.user.lastName}
                            onChange={this.handleChangeText}
                        />
                        <EmailInput
                            id="email"
                            label="Email"
                            value={this.state.user.email}
                            onChange={this.handleChangeText}
                        />
                        <DateInput
                            id="birthDate"
                            label="Birth Date"
                            value={this.state.user.birthDate}
                            onChange={this.handleChangeText}
                        />
                        <PasswordInput
                            id="password"
                            label="Temporary Password"
                            value={this.state.user.password}
                            onChange={this.handleChangeText}
                        />
                        <PrimaryButton
                            label="Submit"
                            onClick={this.handleSubmit}
                        />

                    </form>
                </div>
            </div> 
        )
    }
}

export default CreateUser;