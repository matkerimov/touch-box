
const changeColor = document.querySelectorAll( ".boxes div")

function colorGenerator() {
    changeColor.forEach(el => {
        el.addEventListener("click", (event) =>{
            event.target.classList.add("color")
        })
    })
}

colorGenerator()

// changeColor.onclick = function () {
//
//     this.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
// };























