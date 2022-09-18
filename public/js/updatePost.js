// This JS file handles updating posts

const postUpdateHandler = async (event) => {
    event.preventDefault();

    const post_name = document.querySelector('.postTitle').value;
    const contents = document.querySelector('.postContents').value;
    const id = document.location.pathname.split('/')[2];

    if (!post_name && !contents) {
        alert('No updates detected')
        return;
    }


    const updateResponse = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            post_name,
            contents,
            post_date: Date.now(),
        }),
        headers: { 'Content-Type': 'application/json' },
    })

    if (updateResponse.ok) {
        alert('Post updated!');
        document.location.replace('/dashboard')
    } else {
        alert('Error updating post!');
    };


}

document.querySelector('#submitUpdate').addEventListener('click', postUpdateHandler);