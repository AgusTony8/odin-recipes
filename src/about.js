export default function infoCoffeShop() {
  //create about me section
  const abtTxt = document.createElement("p");
  abtTxt.innerHTML =
    "On this coffee shop we make dreams, dreams of extravagant taste and immaculate views<br>" +
    "We open from 8:00pm 9:00pm (yes only an hour, im sleepy)";
  abtTxt.id = "about-me";
  //fetch the body
  const body = document.querySelector("body");

  body.appendChild(abtTxt);
}
