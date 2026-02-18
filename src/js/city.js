import { saveFavorite } from "./storage/favorites.js";
import { showToast } from "./components/toast.js";

button.addEventListener("click", () => {
  const success = saveFavorite({
    id: city.id,
    name: city.name,
    country: city.country,
    population: city.population
  });

  if (success) {
    showToast("Added to favorites ❤️");
  } else {
    showToast("Already in favorites ⚠️");
  }
});
