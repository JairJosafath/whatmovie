export const key = "b1b2759638dee8b830bb70c97e34f3dd";

export const movies = {
  getGenres: `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`,
  getMoviesBy: (
    type: "popular" | "top_rated" | "latest" | "now_playing" | "upcoming"
  ) =>
    `https://api.themoviedb.org/3/movie/${type}?api_key=${key}&language=en-US&page=1`,
  search: (query: string) =>
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=${1}&include_adult=false`,
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
    `https://api.themoviedb.org/3/search/tv?api_key=${key}&language=en-US&query=${query}&page=${1}&include_adult=false`,
  getShow: (id: string) => {
    return {
      credits: `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${key}&language=en-US`,
      show: `https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=en-US`,
      similar: `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${key}&language=en-US`,
      providers: `https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=${key}&language=en-US`,
    };
  },
  getEpisode: (id: String, season: number, episode: number) =>
    `https://api.themoviedb.org/3/tv/${id}/season/${season}/episode/${episode}?api_key=${key}&language=en-US`,
};

export const people = {
  getPeopleBy: (type: "popular" | "latest") =>
    `https://api.themoviedb.org/3/perrson/${type}?api_key=${key}&language=en-US&page=1`,
  search: (query: string) =>
    `https://api.themoviedb.org/3/search/person?api_key=${key}&language=en-US&query=${query}&page=${1}&include_adult=false`,
  getPerson: (id: string) => {
    return {
      credits: `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${key}&language=en-US`,
      person: `https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US`,
    };
  },
};
