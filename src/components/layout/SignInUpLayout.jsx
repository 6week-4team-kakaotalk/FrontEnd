import React from 'react'
import styled from 'styled-components'


const SignInUpLayout = ({ children }) => {
  return (
    <>
      <LayoutBody>
        {children}
      </LayoutBody>
    </>

  )
}
export default SignInUpLayout;

const LayoutBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;