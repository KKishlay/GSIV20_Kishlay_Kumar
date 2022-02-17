const API_KEY = "0e5f35a9b45e09dc42ee40b16e9da7e2";

const requests = {
  fetchPopular: `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
  getDetails: `/movie/{id}?api_key=${API_KEY}`,
};

export default requests;
