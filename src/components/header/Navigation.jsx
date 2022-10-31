import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
//import { ReactComponent as Personfill } from "../assets/person-fill.svg";
//import { ReactComponent as Chatfill } from "../assets/chat-fill.svg";

const Navigation = () => {
  const navigate = useNavigate();
  const [fbutton, setFbutton] = useState(true);

  return (
    <NavContainer>
      <Fbutton onClick={() => { navigate('/') }}>
        <i className="fa-solid fa-user"></i>

      </Fbutton>
      <Cbutton onClick={() => { navigate('/chat') }}>
        <i className="fa-solid fa-comment"></i>
      </Cbutton>
      <Lbutton><i className="fa-solid fa-right-from-bracket"></i></Lbutton>
    </NavContainer>
  )
}

export default Navigation;

const Fbutton = styled.button`
  font-size: 25px;
  color: #c0c0c0;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  margin-top:30px;
  margin-bottom:10px;
  &:hover{
    color: #868686;
  }
  &:active  {
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
  margin-bottom:10px;
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
  margin-bottom:10px;
  &:hover{
    color: #868686;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ececec;
  height: 500px;
  width: 7vw;
  box-shadow: 2px 2px 0px 0px #cacaca;
`;