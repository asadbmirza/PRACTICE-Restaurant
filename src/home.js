import Burger from './burger.jpg';

function loadContent() {
    const info = document.createElement("div");
    const header = document.createElement("h1");
    header.textContent = "Today's daily special!";
    const img = new Image();
    const list = document.createElement("ul");

    info.classList.add("info");
    img.src = Burger;

    for (let i = 0; i < 4; i++) {
        const listElement = document.createElement("li");
        if (i == 0) listElement.textContent = "5 out of 5 stars!";
        else if (i == 1) listElement.textContent = "Best burgers in town!";
        else if (i == 2) listElement.textContent = "Sensational!";
        else if (i == 3) listElement.textContent = "Definitely coming back!";
        list.appendChild(listElement);
    }

    info.appendChild(header);
    info.appendChild(img);
    info.appendChild(list);

    return info;
}

export default loadContent;