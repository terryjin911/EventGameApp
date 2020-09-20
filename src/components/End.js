import React from "react";

const End = () => {
  return (
    <div>
      <p>InputName : </p>
      <p>InputEmail : </p>
    </div>
  );
};

//타이머가 끝나면서 나오는 end화면.
//Ingame에서 받아온 totalScore와 input Name,Email이 뜨는 곳
function totalScore(props) {
  return <h1>나의 총 Score: {props.totalScore}</h1>;
}

//응모하기 위한 정보를 입력할 input과 [응모하기] button이 필요 => Info.js
function input({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default End;
