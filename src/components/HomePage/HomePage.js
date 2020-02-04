import React, { Component } from 'react';

import Header from '../Common/Header'

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
                    <button 
                        className="btn btn-primary"
                        onClick={this.props.onClickClaimAccount}
                    >Claim Account
                    </button>
                </div>
            </div> 
        )
    }
}

export default HomePage;