export const filterDuplicatesFromArray = <T>(array: T[], key: keyof T): T[] =>
  Array.from(new Map(array.map((item) => [item[key], item])).values())
