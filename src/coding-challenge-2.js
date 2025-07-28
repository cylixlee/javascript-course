function calculateBMI([weight, height]) {
  return weight / (height * height)
}

function compareBMI(mark, john) {
  const markBMI = calculateBMI(mark)
  const johnBMI = calculateBMI(john)

  if (markBMI > johnBMI) {
    return `Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`
  } else {
    return `John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`
  }
}

console.log(compareBMI([95, 1.88], [85, 1.76]))
console.log(compareBMI([78, 1.69], [92, 1.95]))
