const key = "";
const enum Type {
  a = "a",
}

export async function getGenres() {
  const { genres } = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`
  )
    .then((res) => res.json())
    .then((data) => data);
  return await genres;
}
export async function getMoviesBy(type: Type) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${key}&language=en-US&page=1`
  )
    .then((res) => res.json())
    .then((data) => data);
  return res;
}
export async function search(query: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=${1}&include_adult=false`
  )
    .then((res) => res.json())
    .then((data) => data);
  return res;
}
export async function getMovie(id: string) {
  const movie = await fetch(
    `
    https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US
    `
  )
    .then((res) => res.json())
    .then((data) => data);
  const credits = await fetch(
    `
    https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US
    `
  )
    .then((res) => res.json())
    .then((data) => data);
  const similar = await fetch(
    `
    https://api.themoviedb.org/3/movie/${id}/similar?api_key=${key}&language=en-US
    `
  )
    .then((res) => res.json())
    .then((data) => data);
  const providers = await fetch(
    `
    https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${key}&language=en-US
    `
  )
    .then((res) => res.json())
    .then((data) => data);

  return { movie, credits, similar, providers };
}
