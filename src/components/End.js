import React, { useState } from "react";

const End = () => {
  //사용자 이름관리 스테이트 정의 및 초기값 세팅
  const [username, setUserName] = useState("");
  const [useremail, setUserEmail] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const { name, email } = user;

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  // const onClickFunction = (e) => {
  //   window.confirm(
  //     `응모자 성함과 이메일 정보를 확인해주세요 ${username}, ${useremail}` //왜 둘중 하나만 뜨냐
  //   );
  //   setUserName("");
  //   setUserEmail("");
  // };

  const onEntryDataSave = () => {
    if (user.name == "") {
      alert("이름을 입력해주세요.");
      return false;
    }

    if (user.email == "") {
      alert("이메일을 입력해주세요.");
      return false;
    }
  };

  return (
    <div>
      <form>
        <p>Name : </p>
        <input
          type="text"
          name="username"
          placeholder="이름을 입력하세요"
          // value="user"
          onChange={(e) => onChangeUserName(e)}
        />

        <p>Email : </p>
        <input
          type="text"
          name="useremail"
          placeholder="이메일을 입력하세요"
          // value="user"
          onChange={(e) => onChangeUserName(e)}
        />
        <br></br>

        <button
          type="submit"
          // onClick={onClickFunction}
          // onClick={(e) => onFileUpload(e)}
        >
          응모
        </button>
      </form>
    </div>
  );
};

//타이머가 끝나면서 나오는 end화면.
//Ingame에서 받아온 totalScore와 input Name,Email이 뜨는 곳
function totalScore(props) {
  return <h1>나의 총 Score: {props.totalScore}</h1>;
}

//응모하기 위한 정보를 입력할 input과 [응모하기] button이 필요 => Info.js
// function input({ type, placeholder, value, onChange }) {
//   return (
//     <div>
//       <input
//         type={type}
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//       />

//       <p>InputName : </p>
//       <input
//         type="text"
//         name="username"
//         placeholder="name"
//         onChange={(e) => onClickFunction(e)}
//       />

//       <p>InputEmail : </p>
//       <input
//         type="text"
//         name="useremail"
//         placeholder="email"
//         onChange={(e) => onClickFunction(e)}
//       />
//       <br></br>
//       <button
//         type="button"
//         // onClick={(e) => onFileUpload(e)}
//       >
//         응모
//       </button>
//     </div>
//   );
// }

export default End;
