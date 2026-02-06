import { getCityImage } from "../api/unsplash.js";

export async function renderCities(cities) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  for (let city of cities) {
    const img = await getCityImage(city.city);

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${img}" width="100%" />
      <h3>${city.city}</h3>
      <p>${city.country}</p>
    `;

    card.addEventListener("click", () => {
   window.location.href = `/city.html?city=${city.city}`;
    });

    container.appendChild(card);
  }
}
