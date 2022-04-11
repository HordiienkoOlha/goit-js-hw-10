import { fetchCountries } from './fetchCountries';
import { renderCountryList } from './renderCountryList';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const textInput = document.querySelector('#search-box');

export function onClick() {
    const name = textInput.value.trim();

    if (!name) return Notify.warning('Please enter the country name');

    fetchCountries(name)
    .then(data => renderCountryList(data))
    .catch(error => {
        console.error(error);
    });
}
