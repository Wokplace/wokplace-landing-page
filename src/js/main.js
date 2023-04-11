// const getAllSections = document.querySelectorAll('section');
const getGlassMorphicSec = document.getElementById('glass-morphic')
const getHambergerMenu = document.getElementById('hamberger-menu');
const getHambergerMenuUl = document.getElementById('hamberger-icon')
var menuToggle = false;
window.onload = getGlassMorphicSec.classList.add("glass-show")

// // console.log(getGlassMorphicSec.classList);
// // console.log(getGlassMorphicSec)
// const options = {
//     root: null,
//     thresold: 0.7,
//     rootMargin: "-300px",
// }

// const observer = new IntersectionObserver((entries, observer)=>{
//     entries.forEach(entry=>{
//         // console.log(entry.target)
//         console.log(entry);
//         if(entry.isIntersecting){
//             entry.target.classList.add('show');
            

//         }
//         else {
//             entry.target.classList.remove("show")
//         }
//     })
// }, options)

// getAllSections.forEach(el=> observer.observe(el))

getHambergerMenu.addEventListener("click", () =>{
    console.log("working")
    if(menuToggle) {
        
    getHambergerMenuUl.classList.remove("responsive-ul-show");
    menuToggle = false;
    }
    else {
    menuToggle = true;
    getHambergerMenuUl.classList.add("responsive-ul-show");
    }
})