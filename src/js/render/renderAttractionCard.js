export function renderAttractionCard(place, imageUrl) {
  return `
    <div class="attraction-card">
      <div class="card-image">
        <img src="${imageUrl}" alt="${place.name}">
      </div>
      <div class="card-content">
        <h3>${place.name}</h3>
        <p><strong>Type:</strong> ${place.type}</p>
        <p><strong>Distance:</strong> ${place.distance} meters</p>
        <p><strong>Latitude:</strong> ${place.latitude}</p>
        <p><strong>Longitude:</strong> ${place.longitude}</p>
      </div>
    </div>
  `;
}
