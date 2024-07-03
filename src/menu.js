function loadMenu() {
    const menu = document.createElement("div");
    menu.textContent = "Menu";
    menu.classList.add("menu");
    const list = document.createElement("ul");
    const menuItems = [
        ["Bruschetta", "$8.00"],
        ["Stuffed Mushrooms", "$10.00"],
        ["Grilled Salmon", "$20.00"],
        ["Chicken Parmesan", "$18.00"],
        ["Cheesecake", "$7.00"],
        ["Chocolate Cake", "$7.00"],
        ["Soft Drinks", "$3.00"],
        ["Coffee", "$4.00"],
        ["Burger", "$9.00"]
    ];


    for (let i = 0; i < menuItems.length; i++) {
        const listElement = document.createElement("li");
        listElement.classList.add("menu-item");

        const item = document.createElement("span");
        item.classList.add("item");

        const price = document.createElement("span");
        price.classList.add("price");

        item.textContent = menuItems[i][0];
        price.textContent = menuItems[i][1];
        
        listElement.appendChild(item);
        listElement.appendChild(price);
        list.appendChild(listElement);
    }
    menu.appendChild(list);
    return menu;
}

export default loadMenu;