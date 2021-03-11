const deleteButtons = document.querySelectorAll('.delete-review');

deleteButtons.forEach( deleteButton => {
  deleteButton.addEventListener('click', async(e)=> {
    const reviewId = e.target.id
    const result = await fetch(`/api/reviews/${reviewId}`, {
      method: 'DELETE'
    });
    const data = await result.json();
    if(data.success === 'success'){
      e.target.parentElement.remove()
    }
  })
})

const editButtons = document.querySelectorAll('.edit-review')

editButtons.forEach(editButton => {
  editButton.addEventListener('click', async(e) => {
    const reviewId = e.target.id
    window.location.href = `/reviews/${reviewId}`
  })
})
