
// This JS file handles posting posts

const postHandler = async (event) => {
    event.preventDefault();

    const post_name = document.querySelector('.postTitle').value;
    const contents = document.querySelector('.postContents').value;


    if (post_name && contents) {
        const postResponse = await fetch('/api/post', {
            method: 'POST',
            body: JSON.stringify({
                post_name,
                contents,
                post_date: Date.now()
            }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (postResponse.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Post Failure!');
        };
    };
};

document.getElementById('submitNewPost').addEventListener('click', postHandler);
