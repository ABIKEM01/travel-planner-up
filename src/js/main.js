import { searchCity } from "./api/geodb.js";
import { renderCities } from "./ui/renderCities.js";
import { showSpinner, hideSpinner } from "./ui/spinner.js";
import { showError } from "./components/error.js";

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
