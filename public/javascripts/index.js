window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")

    const showShelfSelect = document.querySelectorAll('.showShelfSelect');
    const showShelfSubmit = document.querySelectorAll('.showShelfSubmit');
    
    
    showShelfSubmit.forEach(button => {
        button.addEventListener('click', async (event) => {
            const showShelfOption = document.querySelectorAll('.showShelfOption').value;
            const showShelvesId = event.target.previousSibling.value;
            const userId = event.target.value;
            const showId = event.target.id;
            const body = { showShelvesId, showId }
            try {
                const res = await fetch('http://localhost:8080/showshelves', {
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