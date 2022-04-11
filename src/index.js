import { fetchCountries } from './helpers/fetchCountries';
import { renderCountryList } from './helpers/renderCountryList';
import './css/styles.css';
import debounce from 'lodash.debounce';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
const DEBOUNCE_DELAY = 300;
const textInput = document.querySelector('#search-box');
const formRef = document.querySelector('.js-search-form')
console.log(formRef)
// Notify.info('Too many matches found. Please enter a more specific name.');
// Notify.failure('Oops, there is no country with that name');

// // console.log(countryList);
// // console.log(countryInfo);
textInput.addEventListener('input', debounce(onClick, 300));
// textInput.addEventListener('input', onClick());

function onClick() {
  const name = textInput.value.trim();
  fetchCountries(name)
    .then(data => renderCountryList(data))
    .catch(error => {
      console.error(error);
    });
}
