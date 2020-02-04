import React, { Component } from 'react';

import HomePage from './HomePage/HomePage';
import ClaimAccount from './ClaimAccount/ClaimAccount';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentState: 'HomePage',
		};
		this.handleClickClaimAccount = this.handleClickClaimAccount.bind(this);
		this.handleClickHome = this.handleClickHome.bind(this);
	}

	handleClickHome() {
		const state = Object.assign({}, this.state);
		state.currentState = 'HomePage';
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
						onClickClaimAccount={this.handleClickClaimAccount}
					/>
				)
			case 'ClaimAccount': 
				return (
					<ClaimAccount
						onClickHome={this.handleClickHome}
					/>
				)
			default: 
				throw new Error('Invalid State Reached.');
		}
	}
}

export default App;
