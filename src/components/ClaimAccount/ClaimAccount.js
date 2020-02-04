import React, { Component } from 'react';

import Header from '../Common/Header'
import InstanceSelector from '../Common/InstanceSelector';
import PasswordInput from '../Common/PasswordInput';
import PrimaryButton from '../Common/PrimaryButton';

class ClaimAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountSelector : {
                selected: null,
                results: [],
                value: '',
            },
            password: '',
            password2: '',
        };
        this.handleChangeAccountSelector = this.handleChangeAccountSelector.bind(this);
        this.handleClickAccountSelector = this.handleClickAccountSelector.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.loadAccounts('');
    }

    loadAccounts(searchText) {
        const state = Object.assign({}, this.state);
        const accountSelector = Object.assign({}, this.state.accountSelector);
        state.accountSelector = accountSelector;
        accountSelector.value = searchText;
        accountSelector.results = [
            {
                id: 'id1',
                displayAs: 'Account 1',
            },
            {
                id: 'id2',
                displayAs: 'Account 2',
            },
            {
                id: 'id3',
                displayAs: 'Account 3',
            },
        ];

        this.setState(state);
    }

    handleChangeAccountSelector(e) {

        this.loadAccounts(e.target.value);
    }

    handleClickAccountSelector(account) {
        const state = Object.assign({}, this.state);
        const accountSelector = Object.assign({}, this.state.accountSelector);
        state.accountSelector = accountSelector;

        accountSelector.value = account.displayAs;
        accountSelector.selected = account; 
        this.setState(state);
    }

    handleChangePassword(e) {
        console.log(e.target.id);
        console.log(e.target.value);
        const state = Object.assign({}, this.state);
        state[e.target.id] = e.target.value;

        this.setState(state);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('clicked');
        if (this.state.password.length < 7 || this.state.password !== this.state.password2) {
            alert('wrong');
        }
        else {
            alert('right!');
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
                        <InstanceSelector
                            label="Account:"
                            value={this.state.accountSelector.value}
                            results={this.state.accountSelector.results}
                            onClick={this.handleClickAccountSelector}
                            onChange={this.handleChangeAccountSelector}
                        />
                        <PasswordInput
                            id="password"
                            label="Password"
                            value={this.state.password}
                            onChange={this.handleChangePassword}
                        />
                        <PasswordInput
                            id="password2"
                            label="Password Again"
                            value={this.state.password2}
                            onChange={this.handleChangePassword}
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