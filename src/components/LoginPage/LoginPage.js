import React, { Component } from 'react';

import { login } from '../../backend/democrewcy';

import Header from '../Common/Header';
import RedAlert from '../Common/RedAlert';
import EmailInput from '../Common/EmailInput';
import PasswordInput from '../Common/PasswordInput';
import PrimaryButton from '../Common/PrimaryButton';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            message: null,
        };

        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeText(e) {
        const state = Object.assign({}, this.state);
        state[e.target.id] = e.target.value;

        this.setState(state);
    }

    async handleSubmit(e) {
        e.preventDefault();
        const response = await login(this.state.email, this.state.password);

        if (response.accountId) {
            this.props.onLogin(response.accountId);
        }
        else {
            const state = Object.assign({}, this.state);
            state.email = '';
            state.password = '';
            state.message = 'Invalid email or password, GO AWAY!';
            this.setState(state);
        }
    }

    render() {
        return (
            <div>
                <Header
                    onClick={this.props.onClickHome}
                />
                <div className="container">
                    <h4>Welcome to Democrewcy</h4>
                    <br />
                        <RedAlert 
                            message={this.state.message}
                        />
                    <br />
                    <div className="row">
                        <div className="col-6">
                            <h5>Login</h5>
                            <form>
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
                                <PrimaryButton
                                    label="Submit"
                                    onClick={this.handleSubmit}
                                />
                            </form>
                        </div>
                        <div className="col-6">
                            <h5>No Login Yet?</h5>
                            <PrimaryButton
                                label="Claim Account"
                                onClick={this.props.onClickClaimAccount}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage;