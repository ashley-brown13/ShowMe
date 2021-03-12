import eventRating from './utils.js'
eventRating('')
const showShelfSelect = document.querySelectorAll('.showShelfSelect');
const showShelfSubmit = document.querySelectorAll('.showShelfSubmit');


showShelfSubmit.forEach(button => {
    button.addEventListener('click', async (event) => {
        const showShelfOption = document.querySelectorAll('.showShelfOption').value;
        const showShelfId = event.target.previousSibling.value;
        const userId = event.target.value;
        const showId = event.target.id;
        const body = { showShelfId, showId, }
        try {
            const res = await fetch(`/api/showshelves/${showShelfId}`, {
                method: "POST",
                body: JSON.stringify(body),
                headers: {
                   'Content-Type': 'application/json',
                }
            })
        } catch(err){
            console.log(err);
        }

    })
})
