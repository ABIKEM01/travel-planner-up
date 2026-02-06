export async function searchCity(name) {
  const res = await fetch(
    `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${name}`,
    {
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_GEODB_KEY,
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"
      }
    }
  );

  const data = await res.json();
  return data.data;
}
