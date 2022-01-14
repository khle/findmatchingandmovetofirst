export interface Compare<T, U> {
  compare: (t: T, u: U) => boolean
}

export function findMatchingAndMoveToFirst<T, U extends Compare<T, U>>(
  list: readonly T[],
  shouldbeFirst: U
): T[] {
  return list.reduce(
    (accumulator: T[], current: T) =>
      shouldbeFirst.compare(current, shouldbeFirst)
        ? [current, ...accumulator]
        : [...accumulator, current],
    []
  )
}
