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
    window.location.href = '/'
  });
});

const updateForm = document.querySelector('.update-review')

updateForm.addEventListener('submit', async(e) => {
  e.preventDefault();
  const reviewId = updateForm.id;
  const showId = updateForm.parentElement.id;
  const formData = new FormData(updateForm);
  const title = formData.get('title');
  const comment = formData.get('comment');
  const body = {title, comment}
  try {
    const res = await fetch(`/api/reviews/${reviewId}`, {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json'}
    })
    // need to come back and finish error handling section
    // if(res.success !== 'success'){
    //   throw res
    // }
    window.location.href = `/shows/${showId}`
  }catch(e) {
    console.error(e)
  }

});
