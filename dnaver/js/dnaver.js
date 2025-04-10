// Dnaver 0.1 by Andrea Mazzilli
// https://github.com/andreamazzilli-dev/dnaver
// https://dnaver.andrewm.net

let nav = document.querySelector('#nav'); //Nav Layer
let navBurger = document.querySelector('#nav-burger'); //Hamburger Menu
let navIcs = document.querySelector('#nav-ics'); //Close Button

document.addEventListener('DOMContentLoaded', (event) => {
        drawerStatus();
        document.getElementById("nav").classList.add("drawerHide");
    }
)

function drawerStatus(){
    drawerClass = nav.className;

    if(drawerClass == 'drawerShow') {
        drawerStatus = 'open';
    } else {
        drawerStatus = 'closed';
        closeDrawer()
    }
}

function openDrawer(){
    //document.getElementById("nav").classList.remove("hideOnStart");
    document.getElementById("nav").classList.remove("drawerHide");
    document.getElementById("nav").classList.add("drawerShow");
    //document.getElementById("nav").setAttribute("class", "navShow");
    document.querySelector("#nav-burger").classList.add("white");
    document.querySelector("#nav-burger").classList.add("hidden");
}

function closeDrawer(){
    document.getElementById("nav").classList.remove("drawerShow");
    document.getElementById("nav").classList.add("drawerHide");
    drawerStatus = 'closed';
    document.querySelector("#nav-burger").classList.remove("white");
    document.querySelector("#nav-burger").classList.remove("hidden");
}

function toggleDrawer(){
    if (drawerStatus == 'closed') {
        openDrawer();
        drawerStatus = 'open';
    } else {
        closeDrawer();
        drawerStatus = 'closed';
    }
}

navBurger.addEventListener('click', ()=>{
    toggleDrawer();
})

navIcs.addEventListener('click', ()=>{
    toggleDrawer();
})