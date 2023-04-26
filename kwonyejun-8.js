// 1. npm install inquirer
// 2. ESM 방식으로만 동작하는 외부 CLI 라이브러리
// ? inquirer 라이브러리의 .prompt() 메서드는 프로미스를 반환하도록 작성되어 있습니다.
// ? then() 메서드로 입력 받은 데이터를 전달할 수 있다.

import inquirer from "inquirer";

function exampleOne(array) {
  // ! array에 cli로 답변한 데이터가 객체로 넘어와서 객체의 벨류 값을 배열에 넣어 랜덤으로 저장 하게 하였다.
  let suffledArray = [];

  // ! 벨류를 배열에 담는다.
  for (let ket in array) {
    suffledArray.push(array[ket]);
  }
  // ! 배열에 담을 때 랜덤으로 담는다.
  suffledArray.sort(() => Math.random() - 0.5);

  // ! 랜덤으로 담긴 배열 인덱스 중에 array.confirm을 잡아서 빼고 나서 다시 넣으면 제일 뒤로 갈거 같다.
  let testIndex = suffledArray.indexOf(array.confirm);

  // ! 값을 찾아 빼준다.
  suffledArray.splice(testIndex, 1);

  // ! 다시 값을 넣어 젤 뒤로 가게 해준다.
  suffledArray.push(array.confirm);
  return suffledArray;
}

// for(let i = 0; i < array.length; i++){
//   suffledArray.push(array[Math.floor(Math.random() * array.length)]);
// }

// ? inquirer을 모르고 실행 시켰을 때 printf() 와 scanf() 메서드들을 합친 느낌이였다.
inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "너의 이름은...",
    },
    {
      type: "list",
      name: "like food",
      message: "당신이 좋아하는 음식은 무엇입니까?",
      choices: ["마라탕", "감자탕", "초밥", "삼겹살&양파"],
    },
    {
      type: "list",
      name: "like switch",
      message: "당신이 좋아하는 키보드 스위치는 무엇 입니까?",
      choices: ["청축", "갈축", "적축", "흑축"],
    },
    {
      type: "confirm",
      name: "confirm",
      message: "확실합니까?",
    },
  ])
  .then((answers) => {
    // ? answers 매개변수에 cli에서 질문을 받아 답변한 데이터가 객체로 나오는 것을 확인 하였다.
    // * { name: '권예준', 'like food': '초코우유', confirm: true }
    console.log(exampleOne(answers));
    // console.log(answers);
  });