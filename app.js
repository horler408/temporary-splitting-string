const firstName = 'firstabc'
const items = [
  {
    firstname: 'first',
  },
  {
    firstname: 'first_copy1',
  },
  {
    firstname: 'first_copy2',
  },
  {
    firstname: 'firstabc',
  },
  {
    firstname: 'second_copy2',
  },
  {
    firstname: 'secondabc',
  },
]
// we are returning object
const tempItems = items.reduce((total, item) => {
  // first check for only copy values
  if (item.firstname.includes('_copy')) {
    // if copy exists split into array with two values
    // one name (before copy) and second actual number
    const tempItem = item.firstname.split('_copy')
    const name = tempItem[0]
    const number = tempItem[1]
    // check if in the object there is a property (with name value)
    // if it does not exist create one (with number as value)
    // if does exist make sure it's value is the biggest one
    if (total[name]) {
      if (total[name] < number) {
        total[name] = number
      }
    } else {
      total[name] = number
    }
  }
  return total
}, {})
// since we are returning object we must covert back to arrays
// first we get names
let copyValue = 0
if (tempItems[firstName]) {
  copyValue = tempItems[firstName]
} else {
  // add value manually
}

console.log(copyValue)
