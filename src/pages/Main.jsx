import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import MainModal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
// import { __getPlusUser } from '../_redux/modules/friend_info';
// import { __getUserInfo } from '../_redux/modules/user_info';

const Main = () => {
  //const [modalIsOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState('');
  const [searchVal, setSearchVal] = useState('');

  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state);
  console.log(userInfo);
  // const friendInfo = useSelector((state) => state.friend.userFriend);

  // useEffect(() => {
  //   dispatch(__getUserInfo());
  // }, []);

  // useEffect(() => {
  //   dispatch(__getPlusUser());
  // });

  // useEffect(() => {
  //   //dispatch get친구정보
  // });

  // const plusUserId = () => {
  //   dispatch(__postPlusUser(userName));
  // };

  // lodash 친구검색

  // const searchFriendName =
  //   friendInfo &&
  //   friendInfo.filter((friend) => {
  //     return friend.nickname.toLowerCase().includes(searchVal.toLowerCase());
  //   });

  // const handleSearchDebounce = _.debounce((e) => {
  //   setSearchVal(e.target.value);
  // }, 300);

  const handModal = () => {
    setModal(!modal);
  };

  return (
    <Layout>
      <MainContainer>
        {/* 상단 메뉴 */}
        <TopBox>
          <TopText>친구</TopText>
          <TopButton onClick={handModal}>
            <i className="fa-solid fa-user-plus"></i>
          </TopButton>

          {/* 모달창 */}
          <MainModal
            isOpen={modal}
            onRequestClose={() => setModal(false)}
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
              },
              content: {
                margin: '0 auto',
                width: '500px',
                height: '400px',
              },
            }}
          >
            <ModalBox>
              <div>
                <h3>친구추가</h3>
              </div>
              <MButton onClick={handModal}>
                <i className="fa-solid fa-x"></i>
              </MButton>
            </ModalBox>

            <ModalSearch>
              <InputSearch
                type="text"
                placeholder="친구 찾기"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <ButtonSearch>찾기</ButtonSearch>
            </ModalSearch>

            <ModalPro>
              <ModalProfile></ModalProfile>
              <ModalProfileName>곽항해</ModalProfileName>
              <ButtonPlus
                onClick={() => {
                  dispatch();
                }}
              >
                추가
              </ButtonPlus>
            </ModalPro>
          </MainModal>
          {/* 모달창 */}
        </TopBox>

        {/* 내 프로필 */}
        <MyBox>
          <Profile></Profile>
          <ProfileName>김항해</ProfileName>
        </MyBox>
        <hr width={470} color="#e2e2e2" />

        {/* 친구 리스트 */}
        <FrBox>
          <FrProfile></FrProfile>
          <FrProfileName>이항해</FrProfileName>
        </FrBox>

        <FrBox>
          <FrProfile></FrProfile>
          <FrProfileName>박항해</FrProfileName>
        </FrBox>
      </MainContainer>
    </Layout>
  );
};

export default Main;

const ModalBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InputSearch = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  font-size: 18px;
`;

const ButtonSearch = styled.button`
  border: none;
  outline: none;
  background-color: #4a403a;
  border-radius: 5px;
  color: #fff;
  width: 70px;
  height: 30px;
  margin-left: 20px;
  font-size: 15px;
  cursor: pointer;
`;

const ModalSearch = styled.div`
  margin-top: 15px;
`;

const ModalPro = styled.div`
  display: flex;
  margin-top: 15px;
  align-items: center;
`;

const ModalProfile = styled.div`
  background-image: url('https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/309/59932b0eb046f9fa3e063b8875032edd_crop.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 15px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalProfileName = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

const ButtonPlus = styled.button`
  width: 50px;
  height: 30px;
  border: none;
  outline: none;
  background-color: #4a403a;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
`;

const MButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 18px;
`;

const MainContainer = styled.div`
  width: 500px;
  box-shadow: 2px 2px 0px 0px #cacaca;
`;

const Profile = styled.div`
  background-image: url('https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/309/59932b0eb046f9fa3e063b8875032edd_crop.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 15px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileName = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

const MyBox = styled.div`
  margin-left: 15px;
  margin-bottom: 15px;
  display: flex;
`;

const FrBox = styled.div`
  margin-left: 15px;
  margin-bottom: 15px;
  margin-top: 15px;
  display: flex;
`;

const FrProfile = styled.div`
  background-image: url('https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/309/59932b0eb046f9fa3e063b8875032edd_crop.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 15px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FrProfileName = styled.div`
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

const TopButton = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
`;

const TopText = styled.div`
  font-weight: 600;
`;
const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 15px 15px 15px;
`;
