import dynamicStar from './utils.js'
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

dynamicStar()
const ratings = document.querySelectorAll('.star')
ratings.forEach(rating => {
  rating.addEventListener('click', async(e) => {
    e.preventDefault();
    const showId = document.querySelector('.container-ratings').id
    const ratingValue = e.target.id;
    const body = {ratingValue}
    try{
      const res = await fetch(`/api/shows/${showId}/ratings`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {'Content-Type': "application/json"}
      })
      const dataPost = await res.json()
      if(res.ok){
        if(dataPost.created === 'created'){
          const textRating = document.getElementById(`rating${showId}`)
          textRating.innerText = 'Successfully rated show!'
        }else if(dataPost.updated === 'updated') {
          const textRating = document.getElementById(`rating${showId}`)
          textRating.innerText = 'Succesfuly updated your rating!'
        }
        const avgRating = document.getElementById('rating');
        const result = await fetch(`/api/shows/${showId}/ratings`);
        const data = await result.json()
        avgRating.innerHTML = `${data.avgRating} <span> avg. Rating </span> <span>`
      }
    }catch(e) {
      console.error(e)
    }

  })
})

const addToShowShelfBtn = document.querySelector('.addToShowShelfBtn')

addToShowShelfBtn.addEventListener('click', async(e) => {
  console.log('test')
  const showShelfOption = document.querySelectorAll('.showShelfOption').value;
  const showShelfId = e.target.previousSibling.value;
  const userId = e.target.value;
  const showId = e.target.id;
  const body = { showShelfId, showId };

  try {
    const res = await fetch(`/api/showshelves/${showShelfId}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }})
  } catch (err){
    console.log(err);
}})
