
// This JS file handles posting and deleting posts

const commentHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment').value;
    const id = document.location.pathname.split('/')[2];


    if (comment) {
        const commentResponse = await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                comment,
                comment_date: Date.now(),
                post_id: id
            }),
            headers: { 'Content-Type': 'application/json' },
        })
        console.log(commentResponse)
        if (commentResponse.ok) {
            location.reload();
        } else {
            alert('Comment Failure!!');
        };
    };
};





document.getElementById('commentForm').addEventListener('submit', commentHandler);
