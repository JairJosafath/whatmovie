export function removeDupes(
  array: any[] | { id: number; name: string }[] | undefined
) {
  return array?.filter((item, index) => array.indexOf(item) === index);
}

export function filterById(list: any[], id: number | undefined) {
  return list.filter((item) => item.genre_ids.includes(id));
}

export function uniqueArray(array: any[]) {
  const json = array.map((item) => JSON.stringify(item));
  const set = new Set(json);
  const fromset = Array.from(set);
  const unique = fromset.map((item) => JSON.parse(item));
  return unique;
}
