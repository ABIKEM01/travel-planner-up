const STORAGE_KEY = "travel_favorites";

/* ===== Get All ===== */
export function getFavorites() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

/* ===== Save ===== */
export function saveFavorite(item) {
  const favs = getFavorites();

  if (!favs.some(f => f.id === item.id)) {
    favs.push(item);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favs));
    return true; // success
  }

  return false; // duplicate
}

/* ===== Remove ===== */
export function removeFavorite(id) {
  const updated = getFavorites().filter(f => f.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

/* ===== Clear All ===== */
export function clearFavorites() {
  localStorage.removeItem(STORAGE_KEY);
}

/* ===== Count ===== */
export function getFavoriteCount() {
  return getFavorites().length;
}
