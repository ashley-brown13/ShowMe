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
      }
    })
  } catch (err){
    console.log(err);
  }



})