const wrapper = document.querySelector(".boxes")
const changeColor = document.querySelectorAll( ".background")
const colors = ["color", "blue", "green", "red"]


changeColor.forEach((el,idx )=> {
    el.addEventListener("click", () =>{
        const random = Math.floor(Math.random() * 4)
        changeColor.forEach((el) => el.removeAttribute("class"))
        if (idx === changeColor.length -1){
            idx = -1
        }
        changeColor[idx+1].classList.add(colors[random])
    })
})


// wrapper.addEventListener("click", (event) => {
//     if (event.target.classList[0] !== "wrapper"){
//         const random = Math.floor(Math.random()* 4)
//         changeColor.forEach((el) => el.removeAttribute("class"))
//         event.target.classList.add(colors[random])
//     }
// })




// changeColor.onclick = function () {
//
//     this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
// };























