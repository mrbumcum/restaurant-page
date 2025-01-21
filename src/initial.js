export function header() {
    const header = document.createElement("header");

    // Create logo container
    const logoContainer = document.createElement("div");
    logoContainer.className = "logoContainer";
    
    const headerLogo = document.createElement("img");
    headerLogo.setAttribute("src", "#");
    headerLogo.setAttribute("alt", "Naruto shippuden logo");
    logoContainer.appendChild(headerLogo);

    // Create navigation
    const headerNav = document.createElement("nav");
    const homeNav = document.createElement("div");
    homeNav.className = "text homeNav";
    homeNav.textContent = "Home";

    const menuNav = document.createElement("div");
    menuNav.className = "text menuNav";
    menuNav.textContent = "Menu";

    const contactNav = document.createElement("div");
    contactNav.className = "text contactNav";
    contactNav.textContent = "Contact Us";

    headerNav.appendChild(homeNav);
    headerNav.appendChild(menuNav);
    headerNav.appendChild(contactNav);

    header.appendChild(logoContainer);
    header.appendChild(headerNav);

    return header;
}