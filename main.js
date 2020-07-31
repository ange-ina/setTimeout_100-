const zeit = document.querySelector(".zeit")
let x = 100

const clickMe = () => {
    
    let interval = setInterval(() => {
        if (x != 0) {
            x--
            zeit.innerHTML = x + '%'
            
        } else{
            zeit.innerHTML= x+'%'
            clearInterval(interval)
        }
    },10)
}
document.getElementById('btn').addEventListener('click', clickMe)