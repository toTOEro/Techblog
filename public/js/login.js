
// This JS file handles logins

const loginHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#emailLogin').value.trim();
    const password = document.querySelector('#passwordLogin').value.trim();


    if (email && password) {
        const loginResponse = await fetch('/api/user/login', {
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

    if (username && email && password) {
        const signUpResponse = await fetch('/api/user/', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },

        })

        if (signUpResponse.ok) {
            document.location.replace('/');
        } else {
            alert('Signup Failure!');
        };
    };

}



document.getElementById('loginForm').addEventListener('submit', loginHandler);
document.getElementById('signUpForm').addEventListener('submit', signUpHandler);
