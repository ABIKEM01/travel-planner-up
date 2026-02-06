import { ATTRACTIONS } from "../data/attractions.js";
import { getCityImage } from "../api/unsplash.js";
import { saveFavorite } from "../storage/favorites.js";
import { showSpinner, hideSpinner } from "./spinner.js";

const params = new URLSearchParams(window.location.search);
const city = params.get("city");

document.getElementById("cityTitle").textContent = city;

async function loadCity() {
  showSpinner();

  const img = await getCityImage(city);
  document.getElementById("cityImageContainer").innerHTML =
    `<img src="${img}" style="width:100%;max-height:350px;object-fit:cover;">`;

  const list = ATTRACTIONS[city] || ["Popular downtown area", "City museum", "Main park"];

  const container = document.getElementById("attractions");

  list.forEach(place => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${place}</h3>
      <button>Add to Favorites</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      saveFavorite({ name: place, city });
    });

    container.appendChild(card);
  });

  hideSpinner();
}

loadCity();
