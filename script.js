const nav = document.querySelector("nav"),
        togglebtn = nav.querySelector(".toggle_btn");

    togglebtn.addEventListener("click",() =>{
        nav.classList.toggle("open");
    });

//JavaScript code to make draggable navigation 
function onDrag({movementY}){
    const navStyle = window.getComputedStyle(nav),   //code to get all css style of nav
          navTop = parseInt(navStyle.top),
          navHeight = parseInt(navStyle.height),
          windHeight = window.innerHeight;
 
    nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";

    if(navStyle > windHeight - navHeight){
        nav.style.top = `${windHeight - navHeight}px`;
    }
}


nav.addEventListener("mousedown", () =>{
    nav.addEventListener("mousemove", onDrag);
});

nav.addEventListener("mouseup", () => {
    nav.removeEventListener("mousemove", onDrag);
});

nav.addEventListener("mouseleave", () => {
    nav.removeEventListener("mousemove", onDrag);
});