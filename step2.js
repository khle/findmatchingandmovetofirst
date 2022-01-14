const users = [
  { firstName: 'Jane', lastName: 'Foo' },
  { firstName: 'John', lastName: 'Bar' },
  { firstName: 'Jill', lastName: 'Err' }
]

function findMatchingAndMoveToFirst (users, shouldBeFirst) {
  const reArrangedUsers = []

  users.forEach(user => {
    if (
      user.firstName === shouldBeFirst.firstName &&
      user.lastName === shouldBeFirst.lastName
    ) {
      reArrangedUsers.unshift(user)
    } else {
      reArrangedUsers.push(user)
    }
  })

  return reArrangedUsers
}

const reArrangedUsers = findMatchingAndMoveToFirst(users, {
  firstName: 'John',
  lastName: 'Bar'
})
console.log(reArrangedUsers)
