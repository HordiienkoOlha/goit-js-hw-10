export function fetchCountries(name) {
  const url = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`;
  return fetch(url)
    .then(r => {
      if (!r.ok) {
        throw Error(`Error: ${r.statusText}`);
      }
      return r.json();
    })
    .catch(error => {
      console.error(error);
    });
}
