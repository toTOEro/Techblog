
// This JS file handles deleting posts

const deleteBts = document.querySelectorAll('#deleteBt')

const postDeleteHandler = async (event) => {
    event.preventDefault();
    const id = event.path[1].value

    if (id) {
        const deleteResponse = await fetch(`/api/post/${id}`, {
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
    bt.addEventListener('click', postDeleteHandler)
})
