function add(stringNumbers) {
  let number = stringNumbers;
  let numbers = number.replace(/(\r\n|\n|\r)/gm, ",");

  if (numbers == "") {
    return 0;
  } else if (numbers < 0) {
    throw new Error("Negatives not allowed");
  } else if (numbers.length === 1) {
    return parseInt(numbers);
  } else {
    let result = numbers.split(",");
    let total = 0;
    for (let i = 0; i < result.length; i++) {
      total = total + parseInt(result[i]);
    }
    return total;
  }
}
      

