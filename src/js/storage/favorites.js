export function saveFavorite(item) {
  const favs = JSON.parse(localStorage.getItem("favs")) || [];
  favs.push(item);
  localStorage.setItem("favs", JSON.stringify(favs));
}

export function getFavorites() {
  return JSON.parse(localStorage.getItem("favs")) || [];
}
