import loadContent from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";
import "./style.css";

function navHandling() {
    const homeButton = document.querySelector("#homeButton");
    const menuButton = document.querySelector("#menuButton");
    const aboutButton = document.querySelector("#aboutButton");
    const body = document.querySelector("body");

    const info = loadContent();
    const menu = loadMenu();
    const about = loadAbout();

    function replaceContent(e) {
        body.removeChild(body.lastChild);
        const content = document.createElement("div");
        content.setAttribute("id", "content");

        if (e.target.getAttribute("id") == "homeButton") {
            content.appendChild(info);
        }
        else if (e.target.getAttribute("id") == "menuButton") {
            content.appendChild(menu);
        }
        else {
            content.appendChild(about);
        }
        body.appendChild(content);
    }

    homeButton.addEventListener("click", replaceContent);
    menuButton.addEventListener("click", replaceContent);
    aboutButton.addEventListener("click", replaceContent);
}

navHandling();


