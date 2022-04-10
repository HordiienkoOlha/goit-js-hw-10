export function fetchCountries(name) {
  const url = `https://restcountries.com/v2/name/${name}?fields=name,fullText=true,capital,population,flags,languages`;
  return fetch(url).then(r => {
    if (!r.ok) {
      throw new Error(`Error: ${r.statusText}`);
    }
    return r.json();
  });
}
