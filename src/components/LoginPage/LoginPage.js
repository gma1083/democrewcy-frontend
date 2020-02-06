import React, { Component } from 'react';

import Header from '../Common/Header';
import EmailInput from '../Common/EmailInput';
import PasswordInput from '../Common/PasswordInput';
import PrimaryButton from '../Common/PrimaryButton';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
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
        alert('loging in ' + this.state.email + ' with password ' + Array.from(this.state.password).reduce((acc)=> acc ? acc + '*' : '*'));
    }

    render() {
        return (
            <div>
                <Header
                    onClick={this.props.onClickHome}
                />
                <div className="container">
                    <h4>Login</h4>
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
            </div>
        )
    }
}

export default LoginPage;