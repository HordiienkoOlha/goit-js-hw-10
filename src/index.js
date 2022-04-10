import { fetchCountries } from './helpers/fetchCountries';
import { renderCountryList } from './helpers/renderCountryList';
import './css/styles.css';
import debounce from 'lodash.debounce';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
const DEBOUNCE_DELAY = 300;
const textInput = document.querySelector('#search-box');

const countryInfo = document.querySelector('.country-info');
// Notify.info('Too many matches found. Please enter a more specific name.');
// Notify.failure('Oops, there is no country with that name');

// // console.log(countryList);
// // console.log(countryInfo);
textInput.addEventListener('input', debounce(onClick, 300));
// textInput.addEventListener('input', onClick());

function onClick() {
  const name = textInput.value;
  fetchCountries(name)
    .then(name => console.log(name))
    .catch(error => {
      console.error(error);
    });
}
// fetchCountries().
