let circle = document.querySelectorAll(".circle")
let line = document.querySelector(".line")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let body = document.querySelector("body")
circle[0].style.border = `5px solid  rgb(6, 131, 248)`
let score = 0

let arr = ['lightgray', 'green', 'purple', 'darkblue', 'white']

 
    
next.addEventListener("click", () => {
    
    prev.disabled = ''
    prev.classList.remove("active")
    score++
    body.style.background = arr[score]
    console.log(score);
  
        if (score === 1) {
            line.style.width = `${score * 25}%`
                circle[1].style.border = `5px solid  rgb(6, 131, 248)`

        }
            else if (score === 2) {
                line.style.width = `${score * 25}%`
                circle[2].style.border = `5px solid  rgb(6, 131, 248)`
            }
            else if (score === 3) {
                line.style.width = `${score * 25}%`
                circle[3].style.border = `5px solid  rgb(6, 131, 248)`
            }
        else if(score ===4){
            next.disabled = 'true'
            next.classList.add("active")
                line.style.width = `${score * 25}%`
                circle[4].style.border = `5px solid  rgb(6, 131, 248)`
            }
        
      console.log('djdjdj');
})

prev.addEventListener("click", () => {
    next.disabled = ''
    next.classList.remove("active")
    score--
    body.style.background = arr[score]
    circle[4].style.border = `5px solid  rgba(128, 128, 128, 0.514) `
   
    console.log(score);

  
    if (score === 0) {
        prev.disabled = 'true'
        line.style.width = `${score * 25}%`
        prev.classList.add("active")
        circle[1].style.border = `5px solid  rgba(128, 128, 128, 0.514)`
        
    }
        else if (score === 1) {
        line.style.width = `${score * 25}%`
        circle[1].style.border = `5px solid rgb(6, 131, 248)`
                circle[2].style.border = `5px solid  rgba(128, 128, 128, 0.514) `

        }
            else if (score === 2) {
                line.style.width = `${score * 25}%`
        circle[2].style.border = `5px solid rgb(6, 131, 248) `
        circle[3].style.border = `5px solid  rgba(128, 128, 128, 0.514) `
            }
            else if (score === 3) {
                line.style.width = `${score * 25}%`
                circle[3].style.border = `5px solid  rgb(6, 131, 248)`
            }
        else if(score === 3) {
            next.disabled = 'true'
            next.classList.add("active")
        line.style.width = `${score * 25}%`
        console.log('yes');
                circle[4].style.border = `5px solid  rgba(128, 128, 128, 0.514) `
            }
        
      
})


