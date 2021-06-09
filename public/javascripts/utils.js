const ratings = document.querySelectorAll('.star')
export default function dynamicStar(){
  ratings.forEach(rating => {
    rating.addEventListener("mouseenter", async(e) => {
      const id = e.target.id
      if(Number(id) === 1){
        if(e.target.classList.contains("off")){
          e.target.classList.add('on')
          e.target.classList.remove('off')
        }else if(document.getElementById(id).nextSibling.classList.contains("off")) {
          e.target.classList.add('off');
          e.target.classList.remove('on');
        }
      }else if(document.getElementById(id).previousSibling.classList.contains("on")){
        if(e.target.classList.contains("off")){
          e.target.classList.add('on')
          e.target.classList.remove('off')
        }else if(document.getElementById(id).nextSibling?.classList.contains("off")) {
          e.target.classList.add('off');
          e.target.classList.remove('on');
        }else if(Number(id) === 5){
          e.target.classList.add('off');
          e.target.classList.remove('on');
        }
      }
    })
  })
}
