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

const updateButtons = document.querySelectorAll('.upate-review')

updateButtons.forEach(updateButton => {
  updateButton.addEventListener('submit', async(e) => {
    e.preventDefault();
    const reviewId = e.target.id;
    const showId = e.parentElement.id;
    const formData = new FormData(form);
    const title = formData.get('title');
    const comment = formData.get('comment');
    const body = {title, comment}
    try {
      const res = await fetch(`/api/reviews/${reviewId}`, {
        method: 'PATCH',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
      })
      console.log(res)
      // if(res.success === 'success'){
        // throw res
      // }
      window.location.href = `/shows/${showId}`
    }catch(e) {
      console.error(e)
    }

  })
})
