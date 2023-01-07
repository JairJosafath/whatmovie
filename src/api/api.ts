export const gKey = "";
export const gapiId = "";
export const gsource = "https://customsearch.googleapis.com/customsearch/v1";
export const source = "https://api.themoviedb.org/3";
export const key = "b1b2759638dee8b830bb70c97e34f3dd";
export const img_base_url = "http://image.tmdb.org/t/p/";
export const backdrop_size = {
  mobile: "w300",
  tablet: "w780",
  desktop: "w1280",
};
export const logo_size = {
  xs: "w45",
  sm: "w92",
  md: "w154",
  lg: "w185",
  xl: "w300",
  xxl: "w500",
};
export const poster_size = {
  xs: "w92",
  sm: "w154",
  md: "w185",
  lg: "w342",
  xl: "w500",
  xxl: "w780",
};

const profile_size = {
  sm: "w45",
  md: "w185",
  lg: "h632",
};
const still_size = {
  sm: "w92",
  md: "w185",
  lg: "w300",
};

export const movies = {
  getGenres: `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`,
  getMoviesBy: (
    type: "popular" | "top_rated" | "latest" | "now_playing" | "upcoming"
  ) =>
    `https://api.themoviedb.org/3/movie/${type}?api_key=${key}&language=en-US&page=1`,
  search: (query: string) =>
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${new URLSearchParams(
      query
    )}&page=${1}&include_adult=false`,
  getMovie: (id: string) => {
    return {
      credits: `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`,
      movie: `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`,
      similar: `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${key}&language=en-US`,
      providers: `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${key}&language=en-US`,
    };
  },
};

export const shows = {
  getGenres: `https://api.themoviedb.org/3/genre/tv/list?api_key=${key}&language=en-US`,
  getShowsBy: (
    type: "popular" | "top_rated" | "latest" | "airing_today" | "on_the_air"
  ) =>
    `https://api.themoviedb.org/3/tv/${type}?api_key=${key}&language=en-US&page=1`,
  search: (query: string) =>
    `https://api.themoviedb.org/3/search/tv?api_key=${key}&language=en-US&query=${new URLSearchParams(
      query
    )}&page=${1}&include_adult=false`,
  getShow: (id: string) => {
    return {
      credits: `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${key}&language=en-US`,
      show: `https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=en-US`,
      similar: `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${key}&language=en-US`,
      providers: `https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=${key}&language=en-US`,
    };
  },
  getSeason: (id: String, seasonId: string) =>
    `https://api.themoviedb.org/3/tv/${id}/season/${seasonId}?api_key=${key}&language=en-US`,
};

export const people = {
  getPeopleBy: (type: "popular" | "latest") =>
    `https://api.themoviedb.org/3/perrson/${type}?api_key=${key}&language=en-US&page=1`,
  search: (query: string) =>
    `https://api.themoviedb.org/3/search/person?api_key=${key}&language=en-US&query=${new URLSearchParams(
      query
    )}&page=${1}&include_adult=false`,
  getPerson: (id: string) => {
    return {
      credits: `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${key}&language=en-US`,
      person: `https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US`,
    };
  },
};

export const companies = [
  {
    id: 109755,
    logo_path: "/wdrCwmRnLFJhEoH8GSfymY85KHT.png",
    name: "Walt Disney Studios",
    origin_country: "US",
  },
  {
    id: 178464,
    logo_path: "/tyHnxjQJLH6h4iDQKhN5iqebWmX.png",
    name: "Netflix",
    origin_country: "US",
  },
  {
    id: 3268,
    logo_path: "/tuomPhY2UtuPTqqFnKMVHvSb724.png",
    name: "HBO",
    origin_country: "US",
  },
  {
    id: 158691,
    logo_path: "/s5ELD35ShWgVKQxgERHM2iP5bXA.png",
    name: "HBO Max",
    origin_country: "US",
  },
  {
    id: 114247,
    logo_path: "/kgZDD6zGSEH6zOq0d6BNUy2hdWK.png",
    name: "YouTube",
    origin_country: "US",
  },
];
