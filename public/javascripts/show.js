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

// const ratingForm = document.querySelector('.rating-form')

// ratingForm.addEventListener('submit', async(e) => {
//   e.preventDefault()
//   console.log(e.target)
// })

const ratings = document.querySelectorAll('.star')
console.log(ratings)
ratings.forEach(rating => {
  rating.addEventListener('click', async(e) => {
    e.preventDefault();
    const ratingValue = e.target.id;
    const showId = document.querySelector('.container-ratings').id
    const body = {ratingValue}
    try{
      const res = await fetch(`/api/shows/${showId}/ratings`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {'Content-Type': "application/json"}
      })
      console.log(res)
    }catch(e) {
      console.error(e)
    }

  })
})
