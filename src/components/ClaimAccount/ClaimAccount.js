import React, { Component } from 'react';

import Header from '../Common/Header'
import PasswordInput from '../Common/PasswordInput';
import TextInput from '../Common/TextInput';
import EmailInput from '../Common/EmailInput';
import PrimaryButton from '../Common/PrimaryButton';

class ClaimAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountId: '',
            email: '',
            password: '',
            password2: '',
        };
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeText(e) {
        const state = Object.assign({}, this.state);
        state[e.target.id] = e.target.value;

        this.setState(state);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('clicked');
        
        if (this.state.password.length <= 0) {
            alert('Please enter a password.');
        }
        else if (this.state.password !== this.state.password2) {
            alert('Your passwords do not match.');
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
                    <form>
                        <TextInput
                            id="accountId"
                            label="Account Key"
                            value={this.state.accountId}
                            onChange={this.handleChangeText}
                        />
                        <EmailInput
                            id="email"
                            label="Email"
                            value={this.state.email}
                            onChange={this.handleChangeText}
                        />
                        <PasswordInput
                            id="password"
                            label="Password"
                            value={this.state.password}
                            onChange={this.handleChangeText}
                        />
                        <PasswordInput
                            id="password2"
                            label="Password Again"
                            value={this.state.password2}
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