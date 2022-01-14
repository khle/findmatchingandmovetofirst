const users = [
  { firstName: 'Jane', lastName: 'Foo' },
  { firstName: 'John', lastName: 'Bar' },
  { firstName: 'Jill', lastName: 'Err' }
]

function findMatchingAndMoveToFirst (users, shouldBeFirst) {
  return users.reduce((accumulator, current) => {
    if (
      current.firstName === shouldBeFirst.firstName &&
      current.lastName === shouldBeFirst.lastName
    ) {
      return [current, ...accumulator]
    } else {
      return [...accumulator, current]
    }
  }, [])
}

const reArrangedUsers = findMatchingAndMoveToFirst(users, {
  firstName: 'John',
  lastName: 'Bar'
})
console.log(reArrangedUsers)
