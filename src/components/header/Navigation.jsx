import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../_redux/modules/memberSlice';
import { useDispatch } from 'react-redux';

const Navigation = () => {
  const navigate = useNavigate();
  //const [fbutton, setFbutton] = useState(true);
  const dispatch = useDispatch();

  // const token = localStorage.getItem("authorization");

  const logOut = () => {
    dispatch(signOut({}));
    localStorage.clear();
    alert('로그아웃 되었습니다.');
    navigate('/login');
  };

  return (
    <NavContainer>
      <Fbutton
        onClick={() => {
          navigate('/');
        }}
      >
        <i className="fa-solid fa-user"></i>
      </Fbutton>
      <Cbutton
        onClick={() => {
          navigate('/chatlist');
        }}
      >
        <i className="fa-solid fa-comment"></i>
      </Cbutton>
      <Lbutton onClick={logOut}>
        <i className="fa-solid fa-right-from-bracket"></i>
      </Lbutton>
    </NavContainer>
  );
};

export default Navigation;

const Fbutton = styled.button`
  font-size: 25px;
  color: #c0c0c0;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  margin-top: 30px;
  margin-bottom: 10px;
  &:hover {
    color: #868686;
  }
  &:active {
    color: #000;
  }
`;
const Cbutton = styled.button`
  font-size: 23px;
  color: #c0c0c0;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  margin-bottom: 10px;
  &:hover {
    color: #868686;
  }
  &:active {
    color: #000 !important;
  }
`;
const Lbutton = styled.button`
  font-size: 25px;
  color: #c0c0c0;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  margin-bottom: 10px;
  &:hover {
    color: #868686;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ececec;
  height: 100vh;
  width: 100px;
  box-shadow: 2px 2px 0px 0px #cacaca;
`;
