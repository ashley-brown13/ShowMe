window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")

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
                console.log(res);
            } catch(err){
                console.log(err);
            }
            
        })
    })


})