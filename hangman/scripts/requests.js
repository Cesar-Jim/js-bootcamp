const getPuzzle = async wordCount => {
  const response = await fetch(
    `//puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );

  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error('Unable to get puzzle!');
  }
};

const getCountry = async countryCode => {
  const response = await fetch('//restcountries.eu/rest/v2/all');

  if (response.status === 200) {
    const data = await response.json();
    return data.find(country => country.alpha2Code === countryCode);
  } else {
    throw new Error('Unable to fetch data!');
  }
};

const getLocation = async () => {
  const response = await fetch('//ipinfo.io/json?token=xxxxxxxxxxxxxx');

  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error('Unable to fetch data');
  }
};

const getCurrentCountry = async () => {
  const location = await getLocation();

  return getCountry(location.country);
};

// const getLocation = () => {
//   return fetch('http://ipinfo.io/json?token=xxxxxxxxxxxxxx')
//     .then(response => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error('Unable to fetch data!');
//       }
//     })
//     .then(data => {
//       return data;
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// *************************************************** USING FETCH
// const getPuzzle = wordCount => {
//   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     .then(response => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error('Unable to fetch puzzle!');
//       }
//     })
//     .then(data => {
//       return data.puzzle;
//     });
// };

// const getCountry = countryCode => {
//   return fetch('http://restcountries.eu/rest/v2/all')
//     .then(response => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error('Unable to fetch data!');
//       }
//     })
//     .then(data => {
//       return (country = data.find(
//         country => country.alpha2Code === countryCode,
//       ));
//     });
// };

// *************************************************** USING PROMISES "MANUALLY"
// const getCountry = countryCode =>
//   new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest();

//     countryRequest.addEventListener('readystatechange', e => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         const country = data.find(
//           country => country.alpha2Code === countryCode,
//         );

//         resolve(country);
//       } else if (e.target.readyState === 4) {
//         reject('An error has taken place');
//       }
//     });

//     countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
//     countryRequest.send();
//   });
