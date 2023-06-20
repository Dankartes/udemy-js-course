'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//https://countries-api-836d.onrender.com/countries/

const getCountryData = function (country) {
  const request = new XMLHttpRequest();

  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    console.log(data);

    const flag = data.flags.png;
    const name = data.name.common;
    const region = data.region;
    const population = (data.population / 1000000).toFixed(1);

    const languages = Object.getOwnPropertyNames(data.languages);
    const { [languages[0]]: language } = data.languages;

    const { [Object.keys(data.currencies)[0]]: currency } = data.currencies;

    const html = `<article class="country">
            <img class="country__img" src="${flag}" />
            <div class="country__data">
              <h3 class="country__name">${name}</h3>
              <h4 class="country__region">${region}</h4>
              <p class="country__row"><span>👫</span>${population}M people</p>
              <p class="country__row"><span>🗣️</span>${language}</p>
              <p class="country__row"><span>💰</span>${currency.name}</p>
            </div>
          </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);

    countriesContainer.style.opacity = 1;
  });
};


getCountryData(`china`);

