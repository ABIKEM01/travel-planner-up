export async function getCityImage(city) {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${city}&client_id=${import.meta.env.VITE_UNSPLASH_KEY}`
  );

  const data = await res.json();
  return data.results[0]?.urls?.regular;
}
