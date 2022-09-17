
// This JS file handles logins

const { response } = require("express");

const loginForm = document.getElementById('loginForm');


const loginHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#emailLogin').value.trim();
    const password = document.querySelector('#passwordLogin').value.trim();


    if (email && password) {
        const loginResponse = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (loginResponse.ok) {
            document.location.replace('/');
        } else {
            alert('Login Failure!');
        };
    };
};

const signUpHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#usernameSignUp').value.trim();
    const email = document.querySelector('#emailSignUp').value.trim();
    const password = document.querySelector('#passwordSignUp').value.trim()

    if (email && password) {
        const signUpResponse = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({ username, email, password })
        })
    }

}



document.getElementById('loginForm').addEventListener('submit', loginHandler);
document.getElementById('signUpForm').addEventListener('submit', signUpHandler);
