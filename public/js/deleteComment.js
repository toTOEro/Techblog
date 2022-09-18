
// This JS file handles deleting comments

const deleteBts = document.querySelectorAll('#deleteCommentBt')

const commentDeleteHandler = async (event) => {
    event.preventDefault();
    const id = event.path[1].value

    if (id) {
        const deleteResponse = await fetch(`/api/comment/${id}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
        })

        if (deleteResponse.ok) {
            document.location.reload();
        } else {
            alert('Delete error!')
        }
    }

}


deleteBts.forEach(bt => {
    bt.addEventListener('click', commentDeleteHandler)
})
