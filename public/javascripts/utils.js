export default function eventRating(className){const ratings = document.querySelectorAll('.star')
  ratings.forEach(rating => {
    rating.addEventListener('click', async(e) => {
      e.preventDefault();
      const ratingValue = e.target.id;
      const showId = document.querySelector(className).id
      const body = {ratingValue}
      try{
        const res = await fetch(`/api/shows/${showId}/ratings`, {
          method: "POST",
          body: JSON.stringify(body),
          headers: {'Content-Type': "application/json"}
        })
        if(res.ok){
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
}
