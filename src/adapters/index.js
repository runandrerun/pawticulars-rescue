const KEY = process.env.REACT_APP_API_KEY;
const SECRET = process.env.REACT_APP_SECRET;

export const fetchOauth = () => {
  // const URL = 'https://api.petfinder.com/v2/animals?organization=';
  const URL = 'https://api.petfinder.com/v2/animals?state=';
  let state = 'NY';
  let org = 'RI77';
  let status = 'adoptable';
  fetch('https://api.petfinder.com/v2/oauth2/token', {
  	method: 'POST',
  	body: 'grant_type=client_credentials&client_id=' + KEY + '&client_secret=' + SECRET,
  	headers: {
  		'Content-Type': 'application/x-www-form-urlencoded'
  	}
  })
  .then(res => res.json())
  .then(data => {
    console.log('token', data);
    return fetch(URL + state + '&status' + status, {
      headers: {
        'Authorization': data.token_type + ' ' + data.access_token,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  })
  .then(res => {
    return res.json();
  })
  .then(pets => {
    console.log('pets', pets);
  })
  .catch(err => console.log(err));
};
