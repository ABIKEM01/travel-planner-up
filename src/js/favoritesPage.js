import {
  getFavorites,
  removeFavorite,
  clearFavorites
} from "./storage/favorites.js";

import { showToast } from "./components/toast.js";

const container = document.getElementById("favorites");
const sortBtn = document.getElementById("sortBtn");
const clearBtn = document.getElementById("clearBtn");

function renderFavorites(list = getFavorites()) {
  container.innerHTML = "";

  if (!list.length) {
    container.innerHTML = "<p>No favorites yet.</p>";
    return;
  }

  list.forEach(f => {
    const card = document.createElement("div");
    card.className = "city-card";

    card.innerHTML = `
      <h3>${f.name}</h3>
      <p><strong>Country:</strong> ${f.country}</p>
      <p><strong>Population:</strong> ${f.population.toLocaleString()}</p>
      <button class="remove-btn" data-id="${f.id}">
        Remove
      </button>
    `;

    container.appendChild(card);
  });

  attachEvents();
}

function attachEvents() {
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const id = e.target.dataset.id;
      removeFavorite(id);
      showToast("Removed from favorites ❌");
      renderFavorites();
    });
  });
}

/* ===== Sort A-Z ===== */
sortBtn?.addEventListener("click", () => {
  const sorted = [...getFavorites()].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  renderFavorites(sorted);
});

/* ===== Clear All ===== */
clearBtn?.addEventListener("click", () => {
  if (confirm("Clear all favorites?")) {
    clearFavorites();
    renderFavorites();
    showToast("All favorites cleared");
  }
});

renderFavorites();
