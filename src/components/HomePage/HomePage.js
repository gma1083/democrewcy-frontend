import React, { Component } from 'react';

import Header from '../Common/Header';
import InfoAlert from '../Common/InfoAlert';
import PrimaryButton from '../Common/PrimaryButton';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            infoMessage: this.props.infoMessage,
        };
    }
    
	setInfoMessage(message) {
		const state = Object.assign({}, this.state);
		this.infoMessage = message;
		this.setState(state);
	}

    render() {
        return (
            <div>
                <Header 
                    onClick={this.props.onClickHome}
                />
                <div className="container">
                    <InfoAlert
                        message={this.state.infoMessage}
                    />
                    <h4>Welcome to Democrewcy</h4>
                    <PrimaryButton
                        label="Create User"
                        onClick={this.props.onClickCreateUser}
                    />
                </div>
            </div> 
        )
    }
}

export default HomePage;