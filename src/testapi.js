// const axios = require('axios');

// const url = 'https://open.tiktokapis.com/v2/research/user/info/';
// const accessToken = 'clt.1234asd2387jedyghgs4easd1234asdf84jenryhdlasuie4jh';
// const appId = '7253433194958292998';
// const clientKey = 'awayg14u67ja6k4o';
// const clientSecret = 'c78a25b573e8468550d1723d9f139bd0';

// const fields = 'open_id,display_name,is_private,bio_description,avatar_url,is_verified,follower_count,following_count,likes_count,video_count';

// const bodyParams = {
//   open_id: 'f9dce9a7-01bf-4c1d-a853-e98d95af5e26', // or provide 'username' instead
// };

// const config = {
//   headers: {
//     Authorization: `Bearer ${accessToken}`,
//     'X-Client-Key': clientKey,
//     'X-Client-Secret': clientSecret,
//     'X-Client-App-ID': appId,
//     'X-Client-Status': 'Staging',
//   },
//   params: {
//     fields,
//   },
// };

// axios.post(url, bodyParams, config)
//   .then(response => {
//     console.log(response)
//     console.log("respuesta API",response.data);
//     // Aquí puedes trabajar con la respuesta recibida
//   })
//   .catch(error => {
//     console.error("error",error);
//     // Manejar el error de alguna manera
//   });
const url = 'https://open.tiktokapis.com/v2/research/user/info/';
const accessToken = 'clt.1234asd2387jedyghgs4easd1234asdf84jenryhdlasuie4jh';
const appId = '7253433194958292998';
const clientKey = 'awayg14u67ja6k4o';
const clientSecret = 'c78a25b573e8468550d1723d9f139bd0';

const fields = 'open_id,display_name,is_private,bio_description,avatar_url,is_verified,follower_count,following_count,likes_count,video_count';

const bodyParams = {
  open_id: 'f9dce9a7-01bf-4c1d-a853-e98d95af5e26', // or provide 'username' instead
};

const config = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
    'X-Client-Key': clientKey,
    'X-Client-Secret': clientSecret,
    'X-Client-App-ID': appId,
    'X-Client-Status': 'Staging',
  },
  body: JSON.stringify(bodyParams),
};

fetch(url, config)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Aquí puedes trabajar con la respuesta recibida
  })
  .catch(error => {
    console.error(error);
    // Manejar el error de alguna manera
  });
