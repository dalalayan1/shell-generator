const axios = require('axios');

export const getData = (url) => {
  return axios.get(url)
	.then(function(response) {
  return response;
})
	.catch(function(error) {
  return error;
});
};

/* To fetch data from an API call*/
export const fetchCatelogDetailsData = () => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  return getData(url);
};
