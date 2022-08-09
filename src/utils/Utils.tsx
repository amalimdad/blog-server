// To split the array into the first 3 items
export function SpliceArrayInToFirstSub(array: any[], count: number) {
  if (array?.length === 0) {
    return []
  } else if (array?.length > count) {
    return array?.splice(0, count)
  } else return array
}

