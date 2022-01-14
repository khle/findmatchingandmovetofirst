const users = [
  { firstName: 'Jane', lastName: 'Foo' },
  { firstName: 'John', lastName: 'Bar' },
  { firstName: 'Jill', lastName: 'Err' }
]

function findMatchingAndMoveToFirst (users, shouldBeFirst) {
  users.forEach((user, index) => {
    if (
      user.firstName === shouldBeFirst.firstName &&
      user.lastName === shouldBeFirst.lastName
    ) {
      const foundUsers = users.splice(index, 1)
      users.unshift(foundUsers[0])
    }
  })
}

findMatchingAndMoveToFirst(users, { firstName: 'John', lastName: 'Bar' })
console.log(users)
