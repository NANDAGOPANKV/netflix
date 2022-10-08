export const API_KEY = "791a91c424b6282b64f65a5f23456a02";
export const IMAGEURL = "https://image.tmdb.org/t/p/original";
export const IMAGEURL300 = "https://image.tmdb.org/t/p/w400";

const requests = {
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  topRated: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  upComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  horror: `
  https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`,
  trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
};

export default requests;
