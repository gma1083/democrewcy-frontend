import { url } from './config';
import cookie from 'react-cookies';

async function login(email, password) {
    const postRequest = {
        method: 'POST',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
    }

    const response = await fetch(url + 'auth/login', postRequest);
    console.log('headers');
    response.headers.forEach(console.log);
    return response.json();
}

async function claimAccount(payload) {
    const postRequest = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    }

    const response = await fetch(url + 'auth/claimAccount', postRequest);
    if (response.status !== 200) {
        throw new Error('Invalid Request');
    }

    return response.json();
}

async function createUser(payload) {
    const postRequest = {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    }

    const response = await fetch(url + 'createAccount', postRequest);
    if (response.status !== 200) {
        throw new Error('Invalid Request');
    }

    return response.json();
}

export { 
    login,
    claimAccount,
    createUser,
}