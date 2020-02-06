import React, { Component } from 'react';

import Header from '../Common/Header'
import PrimaryButton from '../Common/PrimaryButton';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header 
                    onClick={this.props.onClickHome}
                />
                <div className="container">
                    <h4>Welcome to Democrewcy</h4>
                    <div className="row">
                        <PrimaryButton
                            label="Login"
                            onClick={this.props.onClickLogin}
                        />
                    </div>
                    <div className="row">
                        <PrimaryButton
                            label="Claim Account"
                            onClick={this.props.onClickClaimAccount}
                        />
                    </div>
                </div>
            </div> 
        )
    }
}

export default HomePage;