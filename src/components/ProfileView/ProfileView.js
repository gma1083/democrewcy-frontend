import React, { Component } from 'react';

import Header from '../Common/Header'

class ProfileView extends Component {
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
                    <p>Logged In</p>
                </div>
            </div> 
        )
    }
}

export default ProfileView;