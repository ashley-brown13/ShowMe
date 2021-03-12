import dynamicStar from './utils.js'
dynamicStar()
const containerStars = document.querySelectorAll('.container-stars')
containerStars.forEach(containerStar => {
    containerStar.addEventListener('click', async(e) => {
        e.preventDefault()
        if(e.target.tagName !== 'DIV'){
            const ratingValue = e.target.id
            const showId = containerStar.id
            const body = {ratingValue}
            try{
                const res = await fetch(`/api/shows/${showId}/ratings`, {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: {'Content-Type': "application/json"}
                })
                const data = await res.json()
                if(res.ok){
                    if(data.created === 'created'){
                        const textRating = document.getElementById(`rating${showId}`)
                        textRating.innerText = 'Successfully rated show!'
                    }else if(data.updated === 'updated') {
                        const textRating = document.getElementById(`rating${showId}`)
                        textRating.innerText = 'Succesfuly updated your rating!'
                    }
                }
            }catch(e) {
                console.error(e)
            }
        }
    })
})


const showShelfSelect = document.querySelectorAll('.showShelfSelect');
const showShelfSubmit = document.querySelectorAll('.showShelfSubmit');
showShelfSubmit.forEach(button => {
    button.addEventListener('click', async (event) => {
        const showShelfOption = document.querySelectorAll('.showShelfOption').value;
        const showShelfId = event.target.previousSibling.value;
        const userId = event.target.value;
        const showId = event.target.id;
        const body = { showShelfId, showId, }
        const check = event.target.nextSibling;
        try {
            check.style = 'visibility: visible';
            setTimeout(function(){
                check.style = 'visibility: hidden';
            }, 2000);
            
            // alert(`Added to shelf!`);
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
