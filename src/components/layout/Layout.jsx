import React from 'react'
import Navigation from '../header/Navigation'
import styled from 'styled-components'


const Layout = ({ children }) => {
  return (
    <>
      <LayoutBody>
        <Navigation />
        {children}
      </LayoutBody>
    </>

  )
}
export default Layout;

const LayoutBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10px;
  
`;