import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const DEBOUNCE_DELAY = 300;
// Notify.info('Too many matches found. Please enter a more specific name.');
// Notify.failure('Oops, there is no country with that name');

const textInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
// // console.log(textInput);
// // console.log(countryList);
// // console.log(countryInfo);
textInput.addEventListener('input', debounce(onClick, 300));
function onClick() {
  console.log(textInput.value);
}

// countryList.textContent = event.currentTarget.value;
