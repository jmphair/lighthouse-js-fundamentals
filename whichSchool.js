let age = 13;

const whichSchool = function(age) {
  if (age < 13) {
    return "Elementary School";
}
  else if (age >= 13 && age <= 18) {
    return "Secondary School"
}
  else if (age > 18) {
    return "Lighthouse Labs"
}
}

console.log(whichSchool(37));
