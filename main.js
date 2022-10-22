const HOME = document.getElementById("home");
const NAVBAR = document.getElementById("navbar");
const NAVBAR_LINKS = document.getElementById("navbar-bar").children[1];
const NAVBAR_RESPONSIVE = document.getElementById("navbar-responsive");

NAVBAR.style.height = "60px";
NAVBAR_RESPONSIVE.style.opacity = "0";
NAVBAR.style.transitionDelay = "0.3s";
NAVBAR_RESPONSIVE.style.height = "0px";
NAVBAR_RESPONSIVE.style.visibility = "hidden";

if(localStorage.getItem("theme") === null)
    localStorage.setItem("theme", "light");

document.documentElement.setAttribute("theme", localStorage.getItem("theme"));

window.onresize = window.onload = () => {
    HOME.style.height = window.innerHeight - NAVBAR.clientHeight + "px";
    if(window.innerWidth > 850)
    {
        if(NAVBAR.style.height != "60px")
        {
            NAVBAR.style.height = "60px";
            NAVBAR_RESPONSIVE.style.opacity = "0";
            NAVBAR.style.transitionDelay = "0.3s";
            NAVBAR_RESPONSIVE.style.height = "0px";
            NAVBAR_RESPONSIVE.style.visibility = "hidden";
        }
    }
};

function changeTheme()
{
    switch(localStorage.getItem("theme"))
    {
        case "light":
            document.documentElement.setAttribute("theme", "dark");
            localStorage.setItem("theme", "dark");
        break;
        case "dark":
            document.documentElement.setAttribute("theme", "light");
            localStorage.setItem("theme", "light");
        break;
    }
}

function setNavbarActiveLink(element)
{
    for(let i = 0; i != NAVBAR_LINKS.children.length; i++)
    {
        NAVBAR_LINKS.children[i].children[0].removeAttribute("id");
    }
    element.setAttribute("id", "active");
}

function responsiveMenu()
{
    if(window.innerWidth < 850)
    {
        switch(NAVBAR.style.height)
        {
            case "160px":
                NAVBAR.style.height = "60px";
                NAVBAR_RESPONSIVE.style.opacity = "0";
                NAVBAR.style.transitionDelay = "0.5s";
                NAVBAR_RESPONSIVE.style.height = "0px";
                NAVBAR_RESPONSIVE.style.visibility = "hidden";
            break;
            default:
                NAVBAR.style.height = "160px";
                NAVBAR.style.transitionDelay = "0s";
                NAVBAR_RESPONSIVE.style.opacity = "1";
                NAVBAR_RESPONSIVE.style.height = "100px";
                NAVBAR_RESPONSIVE.style.visibility = "visible";
            break;
        }
    }
}