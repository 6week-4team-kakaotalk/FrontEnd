import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { ReactComponent as Chatfilled } from "../assets/chat-fill.svg";
// import { login } from "../_redux/modules/login_signup";
import { signIn } from "../_redux/modules/memberSlice";
import SignInUpLayout from "../components/layout/SignInUpLayout";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //input값 설정
  const [loginId, setloginId] = useState('');
  const [password, setPassword] = useState('');


  const handleRegister = () => {
    navigate("/register");
  };

  const userInfo = {
    loginId: loginId,
    password: password,
  };

  //유효성 검사
  const checkID = loginId.length >= 4 && loginId.length <= 40;
  const checkpassword = password.length >= 6 && password.length <= 32;

  //유효성 통과시 버튼&폰트 색상 변경
  let setColor = "";
  let setFontColor = "";

  if (checkID && checkpassword) {
    setColor = "#4A403A";
    setFontColor = "white";
  } else {
    setColor = "#eeee";
    setFontColor = "gray";
  }

  const onClick = () => {
    dispatch(signIn(userInfo));
    setloginId("");
    setPassword("");
  };

  return (
    <SignInUpLayout>
      <MainContainer>
        <LogoWrap>
          <Chatfilled width="100" height="100" fill="#4A403A"></Chatfilled>
        </LogoWrap>
        <InputWrap>
          <Input
            placeholder="이메일"
            name="username"
            value={loginId}
            borderB="none"
            onChange={(e) => setloginId(e.target.value)}
          />
          <Input
            placeholder="비밀번호"
            name="pw"
            value={password}
            type="password"
            borderT="1px solid #e5e5e5"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button fontColor={setFontColor} color={setColor} onClick={onClick}>
            로그인
          </Button>
        </InputWrap>
        <TextBox>
          <p style={{ cursor: "pointer" }} onClick={handleRegister}>
            회원가입
          </p>
        </TextBox>
      </MainContainer>
    </SignInUpLayout>
  );
};

//전체 가운데 정렬용
const MainContainer = styled.div`
  width: 550px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: #f0e21c;
  border-radius: 5px;
`;

const LogoWrap = styled.div`
  margin-left:35px;
`

//내용물 전체 크기설정
const InputWrap = styled.div`
  width: 30%;
  margin-bottom: 30px;
  margin-top: 50px;
  p {
    font-size: 10px;
    font-weight: 800;
  }
  h1 {
    margin-bottom: 60px;
    font-size: 20px;
    font-weight: bold;
  }
`;

const Input = styled.input`
  min-width: 100%;
  outline: none;
  padding: 15px;
  border: 1px solid #ffce45;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #d3d3d3;
  }
  border-bottom: ${(props) => props.borderB || "1px solid #FFCE45"};
  border-top: ${(props) => props.borderT || "1px solid #FFCE45"};
`;

//입력버튼
const Button = styled.button`
  min-width: 200px;
  padding: 12px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  border: 1px solid #ffce45;
  background-color: ${(props) => props.color || "#eeee"};
  color: ${(props) => props.fontColor || "gray"};
`;

const TextBox = styled.div`
  height: 10px;
  margin-left: 27px;
  margin-top: 50px;
  p {
    text-align: center;
    font-size: 13px;
    color: #4a403a;
  }
`;
export default Login;
