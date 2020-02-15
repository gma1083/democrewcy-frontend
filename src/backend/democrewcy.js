import { url } from './config';

async function login(email, password) {
    const postRequest = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
    }

    const response = await fetch(url + 'auth/login', postRequest);
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

export { 
    login,
    claimAccount,
}