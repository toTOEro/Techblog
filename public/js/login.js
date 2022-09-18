
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


document.getElementById('loginForm').addEventListener('submit', loginHandler);
