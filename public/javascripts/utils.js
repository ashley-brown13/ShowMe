const ratings = document.querySelectorAll('.star')
export default function dynamicStar(){
  ratings.forEach(rating => {
    rating.addEventListener("mouseenter", async(e) => {
      e.target.classList.remove('off')
      e.target.classList.add('on')
      setTimeout(() => {
        e.target.classList.remove('on');
        e.target.classList.add('off')
      }, 2000)
    })
  })
}
