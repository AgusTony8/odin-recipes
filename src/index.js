import _ from "lodash";
import "./style.css";
import clearPage from "./home";
import menuLoad from "./menu";
import infoCoffeShop from "./about";

function headerInitializer() {
  //getting de nav bars buttons
  const bttMenu = document.getElementById("Menu");
  const bttAbout = document.getElementById("About");
  const bttHome = document.getElementById("Home");

  //adding event listeners
  bttMenu.addEventListener("click", function () {
    clearPage();
    menuLoad();
    setTimeout(1);
    scrollToElement("card-container");
  });

  bttHome.addEventListener("click", function () {
    clearPage();
  });
  bttAbout.addEventListener("click", function () {
    clearPage();
    infoCoffeShop();
  });

}

function createCoffeeCard(typeName, imageUrl, description) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const typeNameParagraph = document.createElement("p");
  typeNameParagraph.classList.add("type-name");
  typeNameParagraph.textContent = typeName;

  const coffeeImage = new Image();
  coffeeImage.src = imageUrl;
  coffeeImage.alt = "";

  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.classList.add("desc");
  descriptionParagraph.textContent = description;

  cardDiv.appendChild(typeNameParagraph);
  cardDiv.appendChild(coffeeImage);
  cardDiv.appendChild(descriptionParagraph);

  return cardDiv;
}
function scrollToElement(elemId) {
  const section = document.getElementById(elemId); // Cambia 'section2' al ID de la sección a la que quieres desplazarte
  const offset = 120; // Define el desplazamiento vertical adicional que deseas aplicar (en píxeles)

  // Calcula la posición del elemento
  const topOffset = section.offsetTop - offset;

  // Realiza el desplazamiento suave
  window.scrollTo({
    top: topOffset,
    behavior: "smooth",
  });
}
document.addEventListener("DOMContentLoaded", headerInitializer());
