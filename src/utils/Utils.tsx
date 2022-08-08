// To split the array into the first 3 items
export function SpliceThreeItems(array: any[]) {
  console.log(array);

  return array?.splice(0, 3) || []
}