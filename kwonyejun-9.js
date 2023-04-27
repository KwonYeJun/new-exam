import inquirer from "inquirer";
function oddElevator(floorNumber) {
  return console.log(`${floorNumber}층에 도착하였습니다.`);
}
function evenElevator(floorNumber) {
  return console.log(floorNumber);
}

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message:
        "지하1층 부터 10층 까지 고르시오 숫자만 입력 가능 지하는 -1입력 바람",
    },

    {
      type: "confirm",
      name: "confirm",
      message: "확실합니까?",
    },
  ])
  .then((answers) => {
    console.log(testNumber(answers.name));
    // console.log(answers.name);
  });

function testNumber(num) {
  const numBox = Number(num);
  if (typeof numBox === "number") {
    if (numBox % 2 === 1 || numBox === -1) {
      // setTimeout(() => oddElevator(numBox), 1000);
      // return console.log("문을 닫습니다.");
      setTimeout(() => {
        oddElevator(numBox);
        console.log("문을 닫습니다.");
      }, 1000);
    } else {
      // setTimeout(() => evenElevator(numBox), 1000);
      // return console.log("문을 닫습니다.");
      setTimeout(() => {
        evenElevator(numBox);
        console.log("문을 닫습니다.");
      }, 1000);
    }
  } else {
    // console.log('number');
  }
}
// ! orderlist
//   1. inputrer를 실행 시켜 몇층에 가고 싶은지 값을 물어 봐서 데이터를 가져온다.
// 2. 데이터를 가져온 값을 확인 한다.
// 3. 가져온 데이터를 함수 하나를 만들어 매개변수로 담아준다.
// 4. 데이터를 받아온 함수에서는 숫자 인지 확인을 하는 로직을 지나간다.
// 5. 매개변수가 숫자라면 짝수인지 홀수 인지 판별하는 로직을 작성한다.
// 6. 홀수와 짝수 일때 각각 데이터를 처리 해주는 함수를 호출 하여 매개변수에 담아 준다.
// 7. 함수를 1초 뒤에 호출 하게 하여 1초 뒤에 도착 했습니다 문구가 뜨게 한다.
// 8. 호출된 함수에서 몇 층에 도착 하였습니다. 문구가 출력이 되면 그 뒤에 문을 닫습니다. 문구를 띄우게 작성 한다.
