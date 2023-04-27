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
      message: "지하1층 부터 10층 까지 고르시오 숫자만 입력 가능 지하는 -1입력 바람",
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
  

