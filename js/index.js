// navigation bar on scroll effect and scroll progress bar
const navigationBar = document.getElementById('navigation-bar');
const container = document.querySelector("body");
const highlight = document.getElementById("bar-highlight");

// windows scroll function 
window.onscroll = () => {
    // scroll effect navbar
    if (scrollY > 80) {
        navigationBar.style.backgroundColor = "yellow";
    }
    else {
        navigationBar.style.backgroundColor = "transparent";
    }
    // scroll progress bar
    let cheight = container.offsetHeight - window.innerHeight;
    let cpos = container.getBoundingClientRect();
    let diff = cheight + cpos.top;
    let progress = diff / cheight * 100;
    let csswidth = Math.floor(100 - progress);
    highlight.style.width = csswidth + "%";
}

// right click disable 
document.oncontextmenu = (element) => {
    element.preventDefault();
}

// phone navigation bar version 
const phonenavbar = document.querySelector("header .middle")
const phonenav = document.querySelector(".fa-solid");
phonenav.onclick = () => {
    phonenavbar.classList.toggle("active");
    if(phonenavbar.classList.contains("active")){
        phonenav.classList.replace("fa-bars", "fa-xmark");
    }else{
        phonenav.classList.replace("fa-xmark", "fa-bars");
    }
}
const link = document.querySelectorAll("header .middle nav ul li");
link.forEach((element)=>{
    element.onclick=()=>{
        phonenavbar.classList.remove("active");
        phonenav.classList.replace("fa-xmark", "fa-bars")
    }
})