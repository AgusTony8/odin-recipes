import _ from "lodash";

export default function clearPage() {
  const myContent = document.getElementById("content");
  while (myContent.nextElementSibling) {
    myContent.nextElementSibling.remove();
  }
}
