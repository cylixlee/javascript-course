function bmi(mass, height) {
  return mass / (height * height)
}

function test1() {
  const markWeight = 78
  const markHeight = 1.69
  const johnWeight = 92
  const johnHeight = 1.95

  const markBmi = bmi(markWeight, markHeight)
  const johnBmi = bmi(johnWeight, johnHeight)
  console.log(markBmi, johnBmi)

  const markHigherBMI = markBmi > johnBmi
  console.log(markHigherBMI)
}

function test2() {
  const markWeight = 95
  const markHeight = 1.88
  const johnWeight = 85
  const johnHeight = 1.76

  const markBmi = bmi(markWeight, markHeight)
  const johnBmi = bmi(johnWeight, johnHeight)
  console.log(markBmi, johnBmi)

  const markHigherBMI = markBmi > johnBmi
  console.log(markHigherBMI)
}

test1()
test2()
