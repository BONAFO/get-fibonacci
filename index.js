// FROM X NUMBER TO Y NUMBER
const get_fibonacci = ({ min = 0, max = 10 }) => {
  // FINAL NUMBERS
  const numbers = [];
  let numbers_aux = [1, 1];

  // PREVENTING THE USER FROM PLACING A MIN GREATER THAN THE MAX
  if (min > max) {
    let aux = min;
    min = max;
    max = aux;
  }

  if (min >= 0 && max >= 0) {
    do {
      const result =
        numbers_aux[numbers_aux.length - 1] +
        numbers_aux[numbers_aux.length - 2];
      if (result > max) {
        break;
      }
      numbers_aux.push(result);
    } while (true);

    numbers_aux.map((num) => (num > min ? numbers.push(num) : ""));
  } else {
    console.error("Please, only positives numbers");
  }

  console.log(numbers);

  return numbers;
};


// FROM X AMMOUNT OF TERMS
const get_fibonacci_ammount = ( ammount = 10 ) => {
  // FINAL NUMBERS
  const numbers = [1, 1];

  if (ammount >= 1) {
    do {
      const result = numbers[numbers.length - 1] + numbers[numbers.length - 2];
      if (numbers.length == ammount) {
        break;
      }
      numbers.push(result);
    } while (true);
  } else {
    console.error("Please, ammount must be bigger than 0");
  }

  console.log(numbers);

  return numbers;
};
