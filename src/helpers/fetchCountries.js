import { Notify } from 'notiflix/build/notiflix-notify-aio';
export function fetchCountries(name) {
  const url = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`;

  return fetch(url)
    .then(r => {
      if (!r.ok) {
        Notify.failure('Oops, there is no country with that name');
        throw Error(`Error: ${r.statusText}`);
      }
      return r.json();
    })
    .catch(error => {
      console.error(error);
    });
}
