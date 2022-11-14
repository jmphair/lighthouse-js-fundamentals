const ageCalculator = function (name, yearOfBirth, currentYear) {
  return name + " is " + (currentYear - yearOfBirth) + " years old.";
}

console.log(ageCalculator("Jonathan", "1985", "2022"));
