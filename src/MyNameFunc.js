import React from "react";

//구조분해 할당
const MyNameFunc = ({ name }) => {
  return <div>함수형 컴포넌트의 Props {name} ㅋㅋㅋ</div>;
};

MyNameFunc.defaultProps = {
  name: "함수형props default"
};

export default MyNameFunc;
