import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

import data from "../public/data/DATA.json";

const CardRestaurant = (data) => {
    const restElement = document.querySelector(".card");
    restElement.innerHTML = "";
    data.forEach((resto) => {
        const { name, pictureId, city, rating, description } = resto;
        const listResto = document.createElement("div");

        listResto.innerHTML = `
          <div class="card-item" tabindex="0">
              <img class="card-img"
                  src="${pictureId}" alt="${name} gambar">
              <div class="card-item-content">
                  <h1 class"card-item-title">${name}</h1>
                  <div class="card-item-sub">
                  <P class="card-city">${city}</p>
                  <P class="card-rating">${rating}</p>
                  </div>
                  <P class="card-desription">${description}</p>
                  
              </div>
          </div>  
              `;

        restElement.appendChild(listResto);
    });
};
CardRestaurant(data.restaurants);

const menu = document.querySelector("#menu");
const jumbotron = document.querySelector(".jumbotron");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", (event) => {
    drawer.classList.toggle("open");
    event.preventDefault();
});

jumbotron.addEventListener("click", () => {
    drawer.classList.remove("open");
});

main.addEventListener("click", () => {
    drawer.classList.remove("open");
});
