'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const flag = data.flags.png;
  const name = data.name.common;
  const region = data.region;
  const population = (data.population / 1000000).toFixed(1);

  const languages = Object.getOwnPropertyNames(data.languages);
  const { [languages[0]]: language } = data.languages;

  const { [Object.keys(data.currencies)[0]]: currency } = data.currencies;

  const html = `<article class="country ${className}">
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
};

///////////////////////////////////////
//https://countries-api-836d.onrender.com/countries/

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     console.log(data);

//     const flag = data.flags.png;
//     const name = data.name.common;
//     const region = data.region;
//     const population = (data.population / 1000000).toFixed(1);

//     const languages = Object.getOwnPropertyNames(data.languages);
//     const { [languages[0]]: language } = data.languages;

//     const { [Object.keys(data.currencies)[0]]: currency } = data.currencies;

//     const html = `<article class="country">
//             <img class="country__img" src="${flag}" />
//             <div class="country__data">
//               <h3 class="country__name">${name}</h3>
//               <h4 class="country__region">${region}</h4>
//               <p class="country__row"><span>👫</span>${population}M people</p>
//               <p class="country__row"><span>🗣️</span>${language}</p>
//               <p class="country__row"><span>💰</span>${currency.name}</p>
//             </div>
//           </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);

//     countriesContainer.style.opacity = 1;
//   });
// };

const getCountryAndneighboursData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    // Get neighbours country
    const neighbours = data.borders;
    console.log('nei:', neighbours);

    if (!neighbours) return;

    // AJAX calls
    for (let country of neighbours) {
      const request2 = new XMLHttpRequest();
      request2.open('GET', `https://restcountries.com/v3.1/alpha/${country}`);
      request2.send();

      request2.addEventListener('load', function () {
        const [data2] = JSON.parse(this.responseText);
        console.log(data2);
        renderCountry(data2, 'neighbour');
      });
    }
  });
};

// getCountryAndneighboursData(`usa`);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

const getJSON = function (url, errorMessage = 'Something went wrong!') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMessage} ${response.status}`);

    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    'Country not found!'
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbours = data[0]?.borders?.[0];

      if (!neighbours) throw new Error('No neighbour found!');

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbours}`,
        'Country not found!'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err} big error`);
      renderError(`Something went wrong! ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// console.log('Test start');

// setTimeout(() => console.log('0 sec timer'), 0);

// Promise.resolve('Resolved Promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 10000; i++) {
//     console.log(res);
//   }
//   console.log(res);
// });

// console.log('Test end');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Waiting...');

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You win!');
//     } else reject(new Error('You lose!'));
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(3)
//   .then(() => {
//     console.log('Waited for 3 sec');

//     return wait(1);
//   })
//   .then(() => console.log('Waited for 1 more sec'));

// Promise.resolve('res').then(x => console.log(x));
// Promise.reject(new Error('aaah')).catch(x => console.error(x));

// getPosition().then(pos => console.log(pos));

const whereAmI = async function (lat, lng) {
  try {
    const response = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
    );
    const data = await response.json();

    if (data.status === 401) throw new Error(`${data.description}`);

    return data.countryName;
  } catch (error) {
    renderError(`${error.message}`);
  }
};

// btn.addEventListener('click', function () {
//   getPosition().then(pos => {
//     const { latitude: lat, longitude: lng } = pos.coords;

//     whereAmI(lat, lng).then(data => {
//       getCountryData(data);
//     });
//   });
// });
const imagesContainer = document.querySelector('.images');

const createImage = imgPath => {
  return new Promise((resolve, reject) => {
    const newImage = document.createElement('img');
    newImage.src = imgPath;

    newImage.addEventListener('load', () => {
      imagesContainer.insertAdjacentElement('afterbegin', newImage);
      resolve(newImage);
    });
    newImage.addEventListener('error', () => {
      reject(new Error('Could not load image!'));
    });

    resolve(newImage);
  });
};

let currentImage;

// createImage('img/img-1.jpg')
//   .then(res => {
//     console.log('img 1 loaded');
//     currentImage = res;
//     return wait(2);
//   })
//   .then(res => {
//     currentImage.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(res => {
//     console.log('img 2 loaded');
//     currentImage = res;
//     return wait(2);
//   })
//   .then(res => {
//     console.log('img 3 loaded');
//     currentImage.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .catch(err => console.error(err));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmIAsync = async () => {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data!');
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    const response = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.countryName}`
    );
    if (!response.ok) throw new Error('Problem getting country data!');
    const data = await response.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.countryName}.`;
  } catch (error) {
    renderError(`Something went wrong ${error.message}`);

    throw error;
  }
};

btn.addEventListener('click', function () {
  // whereAmIAsync()
  //   .then(country => console.log(`2: ${country}`))
  //   .catch(error => console.error(`2: ${error}`))
  //   .finally(() => {
  //     console.log('3. finished getting location');
  //   });
  (async function () {
    try {
      console.log('1. Will get location');
      const data = await whereAmIAsync();
      console.log('2.', data);
    } catch (error) {
      console.error(`2: ${error}`);
    }
    console.log('3. Finished getting location');
  })();
});

const get3Countries = async function (...countries) {
  try {
    const promiseArr = [];

    for (let country of countries)
      promiseArr.push(
        getJSON(`https://restcountries.com/v3.1/name/${country}`)
      );

    const data = await Promise.all(promiseArr);

    console.log(data.map(el => el[0].capital[0]));
  } catch (error) {
    console.error(error);
  }
};

// get3Countries('romania', 'canada', 'bulgaria', 'croatia');

// (async function () {
//   const response = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/germany`),
//     getJSON(`https://restcountries.com/v3.1/name/slovenia`),
//     getJSON(`https://restcountries.com/v3.1/name/greece`),
//   ]);

//   console.log(response[0]);
// })();

// const timeout = function (sec) {
//   return new Promise((_, reject) => {
//     setTimeout(() => {
//       reject(new Error('Request took too long'));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.com/v3.1/name/germany`),
//   timeout(0.13),
// ])
//   .then(data => console.log(data[0]))
//   .catch(error => console.error(error));

// Promise.allSettled([Promise.resolve('Succes'), Promise.reject('Fail')]).then(
//   res => console.log(res)
// );

// Promise.any([Promise.resolve('Succes'), Promise.reject('Fail')]).then(
//   res => console.log(res)
// );

const loadNPause = async () => {
  try {
    const image1 = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded.');
    await wait(2);
    image1.style.display = 'none';

    const image2 = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded.');
    await wait(2);
    image2.style.display = 'none';

    await createImage('img/img-3.jpg');
    console.log('Image 3 loaded.');
  } catch (error) {
    console.error(error);
  }
};

// loadNPause();

const loadAll = async imgArr => {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const htmlImages = await Promise.all(imgs);
    htmlImages.forEach(img => img.classList.add('img parallel'));
  } catch (error) {
    console.error(error);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
