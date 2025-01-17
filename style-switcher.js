// Toggle style 
const styleSwitcherToggle = document.querySelector("style-switcher-toggler");
styleSwitcherToggle.addEventListener("click",()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
// Theme color
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyle.forEach(style) => {
        if(color === style.getAttribute("title")) 
        {
            style.removeAttribute("disabled");
        } 
        else 
        {
            style.setAttribute("disabled","true");
        }
    }
}
// theme light and dark
const daylight = document.querySelector(".day-light");
daylight.addEventListener("click", ()=>{
    daylight.querySelector("i"),classList.toggle("fa-sun");
    daylight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")) {
        daylight.querySelector("i").classList.add("fa-sun");
    }
    else 
    {
        daylight.querySelector("i").classList.add("fa-moon"); 
    }
})