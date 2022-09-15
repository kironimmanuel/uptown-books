import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import styled from 'styled-components'

const AuthWrapper = () => {
  return <Wrapper>AuthWrapper Component</Wrapper>
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`

export default AuthWrapper
