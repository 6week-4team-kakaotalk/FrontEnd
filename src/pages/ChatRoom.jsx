import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoChevronBackSharp } from 'react-icons/io5';

const ChatRoom = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ContentWrapper>
        <HeaderBox>
          <IoChevronBackSharp
            style={{ margin: '0 0 0 10px', cursor: 'pointer' }}
            onClick={() => {
              navigate('/ChatList');
            }}
          />
          <ChatName>채팅명</ChatName>
        </HeaderBox>

        <ChatsBox>
          <ProBox>
            <PorImg src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/309/59932b0eb046f9fa3e063b8875032edd_crop.jpeg" />
          </ProBox>
          <div>
            <UserName>이름</UserName>
            <UserChat>상대방 채팅</UserChat>
          </div>
        </ChatsBox>

        <ChatsBox2>
          <div>
            <MyChat>나의 채팅</MyChat>
          </div>
        </ChatsBox2>
      </ContentWrapper>
      <Footer>
        <Textarea />
        <Butdiv>
          <Button>전송</Button>
        </Butdiv>
      </Footer>
    </Wrapper>
  );
};
export default ChatRoom;

const HeaderBox = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #a2b6c7;
`;

const ChatsBox = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  width: 100%;
  height: 70px;
`;

const ChatsBox2 = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  width: 100%;
  height: 70px;
  justify-content: end;
`;

const ChatName = styled.h3`
  display: flex;
  margin: auto;
  margin-left: 15px;
  align-items: center;
`;

const UserName = styled.span`
  font-size: 15px;
  display: flex;
  margin: auto;
  margin-left: 10px;
  align-items: center;
`;
const UserChat = styled.div`
  margin: 5px auto;
  border-radius: 8px;
  display: inline-block;
  align-items: center;
  margin-left: 10px;
  font-size: 13px;
  padding: 7px;
  background-color: yellow;
`;

const MyChat = styled.div`
  margin: 5px auto;
  margin-right: 10px;
  border-radius: 8px;
  display: inline-block;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  padding: 7px;
  justify-content: right;
  background-color: yellow;
`;
const ProBox = styled.div`
  border-radius: 18px;
  width: 100%;
  max-width: 50px;
  height: 100%;
  max-height: 50px;
  margin-left: 10px;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #b2c7d9;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #eeeeee;
`;

const Textarea = styled.textarea`
  width: 100%;
  max-width: 1800px;
  border: none;
  height: 80px;
  outline: none;
  resize: none;
  margin: 10px;
`;

const Butdiv = styled.div`
  width: 100%;
  max-width: 100px;
`;

const Button = styled.button`
  width: 100%;
  max-width: 70px;
  height: 50px;
  margin: 10px;
  border: none;
  background-color: yellow;
`;
const PorImg = styled.img`
  width: 100%;
  max-width: 50px;
  height: 100%;
  max-height: 50px;
  border-radius: 18px;
`;