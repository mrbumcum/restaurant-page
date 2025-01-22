export function addHomePage() {
    const contentContainer = document.getElementById("content");
    contentContainer.id = "homePageContainer";

    // Create manga panel image
    const mangaPanelImg = document.createElement("img");
    mangaPanelImg.setAttribute("src", "#");
    mangaPanelImg.className = "mangaBanner";
    contentContainer.appendChild(mangaPanelImg);
    
    const homePageContainer = document.createElement("div");
    homePageContainer.className = "homePageContainer";
    contentContainer.appendChild(homePageContainer);

    // Create Ichiraku ramen logo
    const ichirakuRamenLogo = document.createElement("img");
    ichirakuRamenLogo.setAttribute("src", "#");
    ichirakuRamenLogo.className = "ichirakuRamenLogo";
    homePageContainer.appendChild(ichirakuRamenLogo);

    // Create home text
    const homeText = document.createElement("div");
    homeText.className = "homeText";
    homePageContainer.appendChild(homeText);

    // Create business name
    const businessName = document.createElement("div");
    businessName.className = "businessName";
    businessName.textContent = "Ichiraku Ramen";
    homeText.appendChild(businessName);

    const businessDescription = document.createElement("div");
    businessDescription.className = "businessDescription"
    homeText.appendChild(businessDescription);

    const businessDescriptionText = document.createElement("p");
    businessDescriptionText.textContent = "Ramen is the best pleasure.";
    businessDescription.appendChild(businessDescriptionText);

    // Create naruto character
    const narutoChar = document.createElement("img");
    narutoChar.setAttribute("src", "#");
    narutoChar.className = "narutoChar";
    homePageContainer.appendChild(narutoChar);
}