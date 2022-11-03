import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import { signUp } from "../_redux/modules/login_signup";
import styled from 'styled-components';
import { ReactComponent as Xbutton } from '../assets/x-circle-fill.svg';
import { signUp } from '../_redux/modules/memberSlice';
import SignInUpLayout from '../components/layout/SignInUpLayout';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //input값 설정
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [nickName, setNickName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const userInfo = {
    loginId: loginId,
    password: password,
    passwordConfirm: passwordConfirm,
    nickName: nickName,
    phoneNumber: phoneNumber,
  };

  // 유효성 검사
  // id=영대소문, 숫자 6~20자

  const checkId = loginId.length >= 6 && loginId.length <= 20;

  // pw-영대소문, 숫자, 특수문자 8~16자
  const checkPassword = password.length >= 6 && password.length <= 16;

  // 닉네임 2~12자
  const checkNickname = nickName.length >= 2 && nickName.length <= 12;

  // 연락처 8~20자
  const checkPhoneNumber = phoneNumber.length >= 8 && phoneNumber.length <= 20;

  // 유효성 통과-> 전송하기
  const onClick = () => {
    if (password === passwordConfirm) {
      if (checkId && checkPassword && checkNickname && checkPhoneNumber) {
        dispatch(signUp(userInfo));
        navigate('/login');
      } else {
        alert('입력란을 확인해주세요');
      }
    } else {
      alert('비밀번호가 일치하지 않습니다');
    }
  };

  //지우기버튼 띄우기
  function display(str) {
    if (str.length >= 1) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <MainContainer>
      <InputWarp>
        <h1>회원가입</h1>
        <p>이메일</p>
        <InputContainer>
          <Input
            placeholder="이메일 입력"
            name="loginName"
            type="email"
            value={loginId}
            onChange={(e) =>
              //setLoginId(e.target.value.replace(/^[a-zA-Z0-9]+@[a-zA-Z]+.[a-z]+${4,12}$/gi, ""))
              // setUsername(e.target.value
              //   .replace(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/))

              setLoginId(e.target.value)
            }
          />
          <InputButton>
            <Xbutton
              width="20"
              height="20"
              fill="#e2e2e2"
              display={display(loginId) ? 'block' : 'none'}
              onClick={(e) => setLoginId('')}
            />
          </InputButton>
        </InputContainer>
      </InputWarp>
      <InputWarp>
        <p>비밀번호</p>
        <InputContainer>
          <Input
            placeholder="비밀번호(8~16자리)"
            name="password"
            type="password"
            maxLength="16"
            value={password}
            onChange={(e) =>
              //setPassword(e.target.value.replace(/[^A-Za-z0-9]*$/gi, ""))
              setPassword(e.target.value)
            }
          />
          <InputButton>
            <Xbutton
              width="20"
              height="20"
              fill="#e2e2e2"
              display={display(password) ? 'block' : 'none'}
              onClick={(e) => setPassword('')}
            />
          </InputButton>
        </InputContainer>
        <InputContainer>
          <Input
            placeholder="비밀번호 재입력"
            type="password"
            value={passwordConfirm}
            maxLength="16"
            onChange={(e) =>
              //setPasswordConfirm(e.target.value.replace(/[^A-Za-z0-9]*$/gi, ""))
              setPasswordConfirm(e.target.value)
            }
          />
          <InputButton>
            <Xbutton
              width="20"
              height="20"
              fill="#e2e2e2"
              display={display(passwordConfirm) ? 'block' : 'none'}
              onClick={(e) => setPasswordConfirm('')}
            />
          </InputButton>
        </InputContainer>
      </InputWarp>
      <InputWarp>
        <InputContainer>
          <p>닉네임</p>
          <Input
            placeholder="닉네임을 입력해주세요"
            name="nickname"
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
            maxLength="12"
          />
          <InputButton2>
            <Xbutton
              width="20"
              height="20"
              fill="#e2e2e2"
              display={display(nickName) ? 'block' : 'none'}
              onClick={(e) => setNickName('')}
            />
            <p>{nickName.length}/12</p>
          </InputButton2>
        </InputContainer>
      </InputWarp>
      <InputWarp>
        <InputContainer>
          <p>연락처</p>
          <Input
            placeholder="연락처를 입력해주세요"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            maxLength="20"
          />
          <InputButton2>
            <Xbutton
              width="20"
              height="20"
              fill="#e2e2e2"
              display={display(phoneNumber) ? 'block' : 'none'}
              onClick={(e) => setPhoneNumber('')}
            />
            <p>{phoneNumber.length}/20</p>
          </InputButton2>
        </InputContainer>
      </InputWarp>
      <Button onClick={onClick}>회원가입</Button>
    </MainContainer>
  );
};

//전체 가운데 정렬용
const MainContainer = styled.div`
  width: 550px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 1px 1px 1px 1px #cacaca;
`;

//내용물 전체 크기설정
const InputWarp = styled.div`
  width: 40%;
  margin-bottom: 30px;
  p {
    font-size: 11px;
    font-weight: 800;
  }
  h1 {
    margin-bottom: 60px;
    font-size: 20px;
    font-weight: bold;
  }
`;

//button 위치조정용
const InputContainer = styled.div`
  position: relative;
`;

//X버튼 container
const InputButton = styled.div`
  position: absolute;
  bottom: 11px;
  right: 10px;
`;

//닉네임 X버튼 container
const InputButton2 = styled.div`
  position: absolute;
  bottom: 11px;
  right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    width: 20px;
    margin-left: 10px;
    color: #d3d3d3;
    font-size: 12px;
  }
`;

//input설정
const Input = styled.input`
  min-width: 100%;
  outline: none;
  padding: 15px;
  border: none;
  border-bottom: 1px solid #e2e2e2;
  &:focus {
    border-bottom: 1px solid black;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #d3d3d3;
    font-weight: bold;
  }
`;

//입력버튼
const Button = styled.button`
  width: 40%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #4a403a;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #302a26;
    font-weight: 600;
  }
`;

export default Register;
