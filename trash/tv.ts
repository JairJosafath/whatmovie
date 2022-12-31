const key = "";
const enum Type {
  a = "a",
}

export async function getGenres() {
  const { genres } = await fetch(
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${key}&language=en-US`
  )
    .then((res) => res.json())
    .then((data) => data);
  return await genres;
}
export async function getMoviesBy(type: Type) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${type}?api_key=${key}&language=en-US&page=1`
  )
    .then((res) => res.json())
    .then((data) => data);
  return res;
}
export async function search(query: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/tv?api_key=${key}&language=en-US&query=${query}&page=${1}&include_adult=false`
  )
    .then((res) => res.json())
    .then((data) => data);
  return res;
}

export async function getShow(id: string) {
  const show = await fetch(
    `
      https://api.themoviedb.org/3/tv/${id}?api_key=${key}&language=en-US
      `
  )
    .then((res) => res.json())
    .then((data) => data);
  const credits = await fetch(
    `
      https://api.themoviedb.org/3/tv/${id}/credits?api_key=${key}&language=en-US
      `
  )
    .then((res) => res.json())
    .then((data) => data);
  const similar = await fetch(
    `
      https://api.themoviedb.org/3/tv/${id}/similar?api_key=${key}&language=en-US
      `
  )
    .then((res) => res.json())
    .then((data) => data);
  const providers = await fetch(
    `
      https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=${key}&language=en-US
      `
  )
    .then((res) => res.json())
    .then((data) => data);

  return { show, credits, similar, providers };
}
