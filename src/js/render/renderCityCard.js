export function renderCityCard(city, imageUrl) {
  return `
    <div class="city-card">
      <div class="card-image">
        <img src="${imageUrl}" alt="${city.name}">
      </div>
      <div class="card-content">
        <h2>${city.name}, ${city.country}</h2>
        <p><strong>Population:</strong> ${city.population.toLocaleString()}</p>
        <p><strong>Region:</strong> ${city.region}</p>
        <p><strong>Latitude:</strong> ${city.latitude}</p>
        <p><strong>Longitude:</strong> ${city.longitude}</p>
        <p><strong>Timezone:</strong> ${city.timezone}</p>
        <p><strong>Elevation:</strong> ${city.elevationMeters ?? "N/A"} m</p>
        <button data-id="${city.id}" class="view-city">Explore</button>
        <button data-id="${city.id}" class="favorite-btn">❤️ Favorite</button>
      </div>
    </div>
  `;
}
