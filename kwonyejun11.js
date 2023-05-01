// ? 먼저 해보았던 버전 처음에는 for in으로 사용 하면 될줄 알았지만 for of를 알게 된 이후에 어떤 점이 문제였는지 알게 되었습니다.
let example = [[1, 2, 3], [4, [5,6]],7,[8,9]];

function flatten(arr) {

  let output = [];
  for(let i of arr ){
    console.log(i);
    if(Array.isArray(i)) {
      // ! 스프레드 연산자로 한번에 넣어야 하는 이유는 잘 모르겠습니다.
      output.push(...flatten(i));
      // output += flatten(i);
      console.log('true')
    } else {
      output.push(i);
      console.log('false')

    }
  }
  // for(let i in arr) {
  //   console.log(i);
  //   if(Array.isArray(i)) {
  //     output += flatten(i);
  //     console.log('true')
  //   } else {
  //     output.push(i);
  //     console.log('false')

  //   }
   
  // }
  return output;
}

console.log(flatten(example));


// ! gpt 버전

// const example = [[1, 2, 3], [4, [5,6]], 7, [8,9]];

// function flatten(data) {
//   const output = [];
//   for (let item of data) {
//     if (Array.isArray(item)) {
//       output.push(...flatten(item));
//     } else {
//       output.push(item);
//     }
//   }
//   return output;
// }

// console.log(flatten(example));
