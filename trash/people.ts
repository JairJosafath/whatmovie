const key = "";
const enum Type {
  a = "a",
}

export async function search(query: string) {
  const res = await fetch(
    `
      https://api.themoviedb.org/3/search/person?api_key=${key}&language=en-US&query=${query}&page=${1}include_adult=false
      `
  )
    .then((res) => res.json())
    .then((data) => data);
  return res;
}

export async function getPeopleBy(type: Type) {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${type}?api_key=${key}&language=en-US&page=1`
  )
    .then((res) => res.json())
    .then((data) => data);
  return res;
}
export async function getPerson(id: string) {
  const person = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US&page=1`
  )
    .then((res) => res.json())
    .then((data) => data);
  const credits = await fetch(
    `https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${key}&language=en-US&page=1`
  )
    .then((res) => res.json())
    .then((data) => data);
  return { person, credits };
}
