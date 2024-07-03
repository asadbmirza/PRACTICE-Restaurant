function loadAbout() {
    const paragraphs = [
        "Welcome to Restaurant Name, where culinary excellence meets a warm and inviting atmosphere. Established in [Year], our restaurant has been dedicated to providing our guests with a memorable dining experience.",
        "Our mission is to offer a diverse menu featuring the freshest ingredients, innovative recipes, and a fusion of traditional and modern flavors. Whether you're here for a special occasion, a casual meal, or simply to enjoy great food, we strive to make every visit unforgettable.",
        "Our team of talented chefs, experienced staff, and dedicated management are passionate about food and hospitality. We are committed to delivering exceptional service and creating a welcoming environment for all our guests.",
        "Thank you for choosing Restaurant Name. We look forward to serving you and making your dining experience extraordinary."
    ];
    const about = document.createElement("div");
    about.classList.add("about");
    
    const header = document.createElement("h2");
    header.textContent = "About Us";
    about.appendChild(header);

    for (let i = 0; i < 4;i ++) {
        const paragraph = document.createElement("p");
        paragraph.textContent = paragraphs[i];
        about.appendChild(paragraph);
    }
    return about;
}

export default loadAbout;