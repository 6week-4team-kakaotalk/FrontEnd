import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { BsXCircle, BsChat } from 'react-icons/bs';
import { getChatRoom } from '../_redux/modules/chatSlice';
import { useParams } from 'react-router-dom';
//import queryString from "query-string";

const ChatList = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const query = queryString.parse(location.search);
  //qury.id

  const chatRoom = useSelector((state) => state.chat.chatRoom);
  console.log(chatRoom);

  // console.log(Object.entries(chatRoom.id)[7])

  //Object.entries()
  // console.log(roomId)

  const handleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    dispatch(getChatRoom());
  }, []);

  // if (!chatRoom) return;
  console.log(chatRoom);

  // let chatNumber = 0;
  // let arr = [];

  // for (let i = 1; i <= chatRoom.length; i++) {
  //   chatNumber++;
  //   arr.push(chatNumber);
  // }
  //console.log(arr)

  return (
    <div>
      {}
      <Headerdiv>
        <h3>채팅</h3>

        <BsChat
          onClick={handleModal}
          size={28}
          style={{
            cursor: 'pointer',
          }}
        />
        <ReactModal
          style={{
            overlay: {
              position: 'fixed',
              backgroundColor: 'rgba(255, 255, 255, 0.75)',
            },
            content: {
              margin: 'auto',
              position: 'fixed',
              width: '400px',
              height: '500px',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px',
            },
          }}
          isOpen={modal}
          onRequestClose={() => setModal(false)}
        >
          <BsXCircle
            size={24}
            onClick={handleModal}
            style={{
              display: 'flex',
              margin: 'auto',
              float: 'right',
              cursor: 'pointer',
            }}
          />

          <h2>대화상대 선택</h2>
          <Search placeholder="이름 검색"></Search>
          <h4>친구</h4>

          <ChatsBox>
            <ProBox>
              <PorImg src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/309/59932b0eb046f9fa3e063b8875032edd_crop.jpeg" />
            </ProBox>
            <CheckBox>
              <UserName>김승재</UserName>
            </CheckBox>
          </ChatsBox>

          <ChatsBox>
            <ProBox>
              <PorImg src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/309/59932b0eb046f9fa3e063b8875032edd_crop.jpeg" />
            </ProBox>
            <CheckBox>
              <UserName>이름</UserName>
            </CheckBox>
          </ChatsBox>
        </ReactModal>
      </Headerdiv>

      {chatRoom.map((room, index) => {
        return (
          //query.id
          <ChatsBox
            key={index}
            onDoubleClick={() => navigate(`/chatroom/${room.id}`)}
          >
            <ProBox>
              <PorImg src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/309/59932b0eb046f9fa3e063b8875032edd_crop.jpeg" />
            </ProBox>
            <div>
              <ChatName>{room.name}</ChatName>
              {/* <LastChat>-</LastChat> */}
            </div>
          </ChatsBox>
        );
      })}
    </div>
  );
};
export default ChatList;

const Headerdiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  padding: 20px;
  align-items: center;
`;

const ChatsBox = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  width: 100%;
  height: 70px;
  cursor: pointer;
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

const PorImg = styled.img`
  width: 100%;
  max-width: 50px;
  height: 100%;
  max-height: 50px;
  border-radius: 18px;
`;

const ChatName = styled.h4`
  display: flex;
  margin: auto;
  margin-bottom: 5px;
  margin-left: 15px;
  align-items: center;
`;

const LastChat = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  margin-left: 15px;
  font-size: 13px;
`;

const Search = styled.input`
  width: 380px;
  height: 40px;
  border: 2px solid rgba(168, 168, 168, 0.493);
  background-color: rgba(214, 211, 211, 0.281);
  border-radius: 25px;
  padding: 0px;
  padding-left: 10px;
  margin: auto;
  display: flex;
  outline: none;
`;

const UserName = styled.span`
  font-size: 15px;
  display: inline-block;
  margin: auto;
  margin-left: 10px;
  align-items: center;
`;

const CheckBox = styled.div`
  display: flex;
`;
