// first we will need to split first name just incase it's already a copy
let firstName = 'firstabc'
firstName = firstName.split('_copy')[0]
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
  {
    firstname: 'secondabc_copy2',
  },
  {
    firstname: 'secondabc_copy3',
  },
  {
    firstname: 'secondabc_copy4',
  },
  {
    firstname: 'secondb',
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
// now we can check if firstName is in the object
// set copyValue to a number (biggest value of copy)
// if it's not in the object just do the manual approach
let copyValue = 0
if (tempItems[firstName]) {
  copyValue = tempItems[firstName]
} else {
  // add value manually
}

console.log(copyValue)
