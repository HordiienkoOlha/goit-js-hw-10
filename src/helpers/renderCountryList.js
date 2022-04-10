const countryList = document.querySelector('.country-list');
console.log(countryList);
export function renderCountryList(name, countryList) {
  const markup = name.map(n =>
    //     countryList.innerHTML = `<li class="country-item">${flags}</li>,
    //   <li class="country-item">${nameOfficial}</li>`,
    console.log(n.capital),
  );

  //   countryList.insertAdjacentHTML('beforeend', markup);
}
