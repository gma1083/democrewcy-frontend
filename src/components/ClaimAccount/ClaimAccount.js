import React, { Component } from 'react';

import { claimAccount } from '../../backend/democrewcy';

import Header from '../Common/Header'
import RedAlert from '../Common/RedAlert';
import PasswordInput from '../Common/PasswordInput';
import TextInput from '../Common/TextInput';
import EmailInput from '../Common/EmailInput';
import PrimaryButton from '../Common/PrimaryButton';

class ClaimAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: '',
                email: '',
                password: '',
                password2: '',
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
        console.log('password');
        console.log(this.state.user.password);
        console.log(this.state.user.password.length);
        
        if (this.state.user.password.length <= 0) {
            this.setMessage('Please enter a password.');
            return;
        }
        else if (this.state.user.password !== this.state.user.password2) {
            this.setMessage('Your passwords do not match.');
            return;
        }

        const payload = Object.assign({}, this.state.user);
        payload.className = 'User';
        console.log(JSON.stringify(payload, null, 2));

        try {
            await claimAccount(payload);
            this.props.onClaimAccountSuccess();
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
                    <h4>Claim Your Account</h4>
                    <RedAlert 
                        message={this.state.message}
                    />
                    <form>
                        <TextInput
                            id="id"
                            label="Account Key"
                            value={this.state.user.id}
                            onChange={this.handleChangeText}
                        />
                        <EmailInput
                            id="email"
                            label="Email"
                            value={this.state.user.email}
                            onChange={this.handleChangeText}
                        />
                        <PasswordInput
                            id="password"
                            label="Password"
                            value={this.state.user.password}
                            onChange={this.handleChangeText}
                        />
                        <PasswordInput
                            id="password2"
                            label="Password Again"
                            value={this.state.user.password2}
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

export default ClaimAccount;