import { findMatchingAndMoveToFirst } from "./findMatchingAndMoveToFirst"

interface User {
  firstName: string
  lastName: string
}

function compareUsers(self: User, other: User): boolean {
  return self.firstName === other.firstName && self.lastName === other.lastName
}

const users: User[] = [
  { firstName: "Jane", lastName: "Foo" },
  { firstName: "John", lastName: "Bar" },
  { firstName: "Jill", lastName: "Err" },
]

const shouldbeFirst = {
  firstName: "John",
  lastName: "Bar",
  compare: compareUsers,
}

const reArrangedUsers = findMatchingAndMoveToFirst(users, shouldbeFirst)
console.log(reArrangedUsers)
