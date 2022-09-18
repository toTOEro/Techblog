
// This JS file handles signups
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



document.getElementById('signUpForm').addEventListener('submit', signUpHandler);
