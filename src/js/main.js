import { searchCity } from "./api/geodb.js";
import { renderCities } from "./ui/renderCities.js";
import { showSpinner, hideSpinner } from "./ui/spinner.js";
import { showError } from "./components/error.js";
import { getFavorites, saveFavorite } from "./storage/favorites.js";
// Load and display favorites when page loads
document.addEventListener("DOMContentLoaded", () => {
  const favs = getFavorites();
  const favContainer = document.getElementById("favoritesContainer"); // create this div in your HTML
  if (favContainer) {
    favContainer.innerHTML = ""; // clear
    favs.forEach(city => {
      const card = document.createElement("div");
      card.className = "favorite-card";
      card.textContent = city.name; // adjust based on your city object
      favContainer.appendChild(card);
    });
  }
});

document.getElementById("searchBtn").addEventListener("click", async () => {
  const name = document.getElementById("cityInput").value;

  showSpinner();
  try {
    console.log("Searching for cities with name:", name);
    const cities = await searchCity(name);
    await renderCities(cities);
  } catch (err) {
    showError(container, "Unable to fetch cities.");
  }
  hideSpinner();
});

