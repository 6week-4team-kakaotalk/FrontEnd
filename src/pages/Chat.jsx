import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout/Layout';


const Chat = () => {
  return (
    <Layout>
      <ChatContainer>
        <div>채팅목록</div>

      </ChatContainer>
    </Layout>

  )
}

export default Chat;

const ChatContainer = styled.div`
  width: 500px;
  box-shadow: 2px 2px 0px 0px #cacaca;
`;