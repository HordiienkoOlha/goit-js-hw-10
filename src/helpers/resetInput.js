const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
export function resetInput() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}
