// function exampleOne(numberValue) {
//   function integerCheck(data) {
//     if (Number.isInteger(data) === true) {
//       return data;
//     } else {
//       return false;
//     }
//   }

//   // squence .2
//   function innerOne(one) {
//     return one + 1;
//   }
//   // sequence .3
//   function innerTwo(two) {
//     return two + 2;
//   }
//   // sequence.4
//   function innerThree(three) {
//     return three + 3;
//   }
//   // sequence.5
//   function innerFour(four) {
//     return four + 4;
//   }

//   integerCheck(numberValue);
//   const first = innerOne(numberValue);
//   const second = innerTwo(first);
//   const third = innerThree(second);
//   const fourth = innerFour(third);
//   return fourth;

// }
// const result = exampleOne(10);
// console.log(result);

// ! test

// function exampleOne(numberValue) {
//   function integerCheck(data) {
//     if (Number.isInteger(data) === true) {
//       return data;
//     } else {
//       return false;
//     }
//   }

//   // squence .2
//   function innerOne(one) {
//     return innerTwo(one) + 1;
//   }
//   // sequence .3
//   function innerTwo(two) {
//     return innerThree(two) + 2;
//   }
//   // sequence.4
//   function innerThree(three) {
//     return innerFour(three) + 3;
//   }
//   // sequence.5
//   function innerFour(four) {
//     return four + 4;
//   }

//   integerCheck(numberValue);
//   const first = innerOne(numberValue);
//   const second = innerTwo(first);
//   const third = innerThree(second);
//   const fourth = innerFour(third);
//   return fourth;

// }
// const result = exampleOne(10);
// console.log(result);

// * Q.1


function exampleOne(numberValue) {
  function integerCheck(data) {
    if (Number.isInteger(data) === true) {
      console.log('1번째');
   const one =  innerOne(data);
      return one;
    } else {
      return false;
    }
  }

  // squence .2
  function innerOne(one) {
    console.log('2번째');
    return innerTwo(one) + 1;
  }
  // sequence .3
  function innerTwo(two) {
    console.log('3번째');

    return innerThree(two) + 2;
    // return two + 2;
  }
  // sequence.4
  function innerThree(three) {
    console.log('4번째');

    return innerFour(three) + 3;
    // return three + 3;
  }
  // sequence.5
  function innerFour(four) {
    console.log('5번째');

    return four + 4;
  }

  const test =integerCheck(numberValue);
  return test;
  // const first = innerOne(numberValue);
  // const second = innerTwo(first);
  // const third = innerThree(second);
  // const fourth = innerFour(third);
  // return fourth;
}
const result = exampleOne(10);
console.log(result);
