import _ from "lodash";
import cffLeche from "./img/cafe-con-leche.png";
import cffTruco from "./img/cafe-turco.png";
import cffFrapu from "./img/cafe-frapuccino.jpg";

export default function menuLoad() {
  //select body
  const body = document.querySelector("body");

  //create the grid container
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  cardContainer.id = "card-container";

  // Create a div with class "cff-cards"
  const cffCardsDiv = document.createElement("div");
  cffCardsDiv.classList.add("cff-cards");

  // Create coffe cards
  const cafeConLecheCard = createCoffeeCard(
    "Café con leche",
    cffLeche,
    "una infusión hecha a base de café y lechita bien ricolina"
  );
  const cafeTurcoCard = createCoffeeCard(
    "Café turco",
    cffTruco,
    "Un café amargo recalentado en la arena"
  );
  const frapuccinoCard = createCoffeeCard(
    "Frapuccino",
    cffFrapu,
    "Un café dulce como nueva pareja y frío como los mensajes de mi ex"
  );

  //add de cards "cff-cards"
  cffCardsDiv.appendChild(cafeConLecheCard);
  cffCardsDiv.appendChild(cafeTurcoCard);
  cffCardsDiv.appendChild(frapuccinoCard);

  //add cffCardsDiv to card container
  cardContainer.appendChild(cffCardsDiv);

  // add divs "card-container" to body
  body.appendChild(cardContainer);
}

// Función para crear una tarjeta de café
function createCoffeeCard(typeName, imageUrl, description) {
  //create what contains the cards and the grid
  const cardDiv = document.createElement("div");

  //add list
  cardDiv.classList.add("card");

  const typeNameParagraph = document.createElement("p");
  typeNameParagraph.classList.add("type-name");
  typeNameParagraph.textContent = typeName;

  const coffeeImage = new Image();
  coffeeImage.src = imageUrl;
  coffeeImage.alt = "";
  coffeeImage.classList.add("coffe-type");

  const descriptionParagraph = document.createElement("p");
  descriptionParagraph.classList.add("desc");
  descriptionParagraph.textContent = description;

  cardDiv.appendChild(typeNameParagraph);
  cardDiv.appendChild(coffeeImage);
  cardDiv.appendChild(descriptionParagraph);

  return cardDiv;
}
