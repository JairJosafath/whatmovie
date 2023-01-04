import { Movie, Show } from "../../trash/types";

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

export function addAttr(array: any[], attr: any) {
  return array.map((item) => {
    const output = { ...item, ...attr };
    return output;
  });
}

export function compare(object1: any, object2: any) {
  return JSON.stringify(object1) === JSON.stringify(object2);
}

export function shuffle(array: any[]) {
  if (array) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }
  return array;
}
