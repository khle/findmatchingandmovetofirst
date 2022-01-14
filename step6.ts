interface User {
  firstName: string
  lastName: string
}

function findMatchingAndMoveToFirst(
  users: readonly User[],
  shouldBeFirst: User
) {
  return users.reduce(
    (accumulator: User[], current: User) =>
      current.firstName === shouldBeFirst.firstName &&
      current.lastName === shouldBeFirst.lastName
        ? [current, ...accumulator]
        : [...accumulator, current],
    []
  )
}

const users = [
  { firstName: "Jane", lastName: "Foo" },
  { firstName: "John", lastName: "Bar" },
  { firstName: "Jill", lastName: "Err" },
]

const reArrangedUsers = findMatchingAndMoveToFirst(users, {
  firstName: "John",
  lastName: "Bar",
})
console.log(reArrangedUsers)
