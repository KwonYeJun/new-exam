first()
  .then(result => {
    // first 함수가 이행되면 secend 함수 실행
    return secend(result);
  })
  .then(result2 => {
    // secend 함수가 이행되면 이곳에서 처리
    console.log(result2);
  })
  .catch(error => {
    // 에러가 발생하면 이곳에서 처리
    console.error(error);
  });
