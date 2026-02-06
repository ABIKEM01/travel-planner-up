import { searchCity } from "./api/geodb.js";
import { renderCities } from "./ui/renderCities.js";
import { showSpinner, hideSpinner } from "./ui/spinner.js";

document.getElementById("searchBtn").addEventListener("click", async () => {
  const name = document.getElementById("cityInput").value;

  showSpinner();
  try {
    const cities = await searchCity(name);
    await renderCities(cities);
  } catch (err) {
    alert("Error loading cities.");
  }
  hideSpinner();
});
