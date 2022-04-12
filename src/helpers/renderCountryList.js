import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { resetInput } from './resetInput';
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

export function renderCountryList(data) {
  resetInput();
  if (data.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    resetInput();
  } else if (data.length <= 10 && data.length > 2) {
    const markup = data
      .map(
        d =>
          `<li class="country-item"><p><img  src="${d.flags.svg}" alt="flag" class="country-flag" width="40" height="25">${d.name}</p></li>`,
      )
      .join('');
    //   console.log(markup);
    countryList.insertAdjacentHTML('beforeend', markup);
  } else if (data.length === 1) {
    const markup = data
      .map(
        d =>
          `<ul class="country-description">
            <li class="country-item country-item-name">
                    <p><img  src="${d.flags.svg}" alt="flag" class="country-flag" width="40" height="25">${d.name}</p></li>
            <li class="country-item">
                <p class="country-description-title">Capital: <span class="country-description-data">${d.capital}</span></p></li>
            <li class="country-item">
                <p class="country-description-title">Population: <span class="country-description-data">${d.population}</span></p></li>
            <li class="country-item">
                <p class="country-description-title">Languages: <span class="country-description-data">${d.languages[0].name}</span></p></li>
</ul>`,
      )
      .join('');
    countryInfo.insertAdjacentHTML('beforeend', markup);
  }
}
