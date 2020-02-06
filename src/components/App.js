import React, { Component } from 'react';

import HomePage from './HomePage/HomePage';
import ClaimAccount from './ClaimAccount/ClaimAccount';
import LoginPage from './LoginPage/LoginPage';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentState: 'LoginPage',
			loggedIn: false,
		};
		this.handleClickClaimAccount = this.handleClickClaimAccount.bind(this);
		this.handleClickHome = this.handleClickHome.bind(this);
		this.handleClickLogin = this.handleClickLogin.bind(this);
	}

	handleClickHome() {
		const state = Object.assign({}, this.state);
		state.currentState = this.state.loggedIn ? 'HomePage': 'LoginPage';
		this.setState(state);
	}

	handleClickLogin() {
		const state = Object.assign({}, this.state);
		state.currentState = 'LoginPage';
		this.setState(state);
	}

	handleClickClaimAccount() {
		const state = Object.assign({}, this.state);
		state.currentState = 'ClaimAccount';
		this.setState(state);
	}

	render() {
		switch (this.state.currentState) {
			case 'HomePage':
				return (
					<HomePage
						onClickHome={this.handleClickHome}
						onClickLogin={this.handleClickLogin}
						onClickClaimAccount={this.handleClickClaimAccount}
					/>
				)
			case 'ClaimAccount': 
				return (
					<ClaimAccount
						onClickHome={this.handleClickHome}
					/>
				)
			case 'LoginPage': 
				return (
					<LoginPage
						onClickHome={this.handleClickHome}
						onClickClaimAccount={this.handleClickClaimAccount}
					/>
				)
			default: 
				throw new Error('Invalid State Reached.');
		}
	}
}

export default App;
