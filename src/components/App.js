import React, { Component } from 'react';

import HomePage from './HomePage/HomePage';
import ClaimAccount from './ClaimAccount/ClaimAccount';
import LoginPage from './LoginPage/LoginPage';
import ProfileView from './ProfileView/ProfileView';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentState: 'LoginPage',
			loggedIn: false,
			user: null,
		};
		this.handleClickClaimAccount = this.handleClickClaimAccount.bind(this);
		this.handleClickHome = this.handleClickHome.bind(this);
		this.handleClickLogin = this.handleClickLogin.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
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

	handleClickProfileView() {
		const state = Object.assign({}, this.state);
		state.currentState = 'ProfileView';
		this.setState(state);
	}

	handleLogin(user) {
		const state = Object.assign({}, this.state);
		state.currentState = 'HomePage';
		state.user = user;
		state.loggedIn = true;
		this.setState(state);
	}

	handleLogout() {
		const state = Object.assign({}, this.state);
		state.currentState = 'LoginPage';
		state.user = null;
		state.loggedIn = false;
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
						onClaimAccountSuccess={this.handleClickLogin}
					/>
				)
			case 'LoginPage': 
				return (
					<LoginPage
						onClickHome={this.handleClickHome}
						onClickClaimAccount={this.handleClickClaimAccount}
						onLogin={this.handleLogin}
					/>
				)
			case 'ProfileView': 
				return (
					<ProfileView
						onClickHome={this.handleClickHome}
					/>
				)
			default: 
				throw new Error('Invalid State Reached.');
		}
	}
}

export default App;
