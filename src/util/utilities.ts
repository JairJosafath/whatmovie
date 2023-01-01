export function removeDupes(
  array: any[] | { id: number; name: string }[] | undefined
) {
  return array?.filter((item, index) => array.indexOf(item) === index);
}
