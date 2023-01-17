import { useState } from 'react'
import styled from 'styled-components';
import Button from './components/Button';
import Profile from './components/Profile'
import Repo from './components/Repo/Repo';
import UserDetails from './components/UserDetails/UserDetails';

function App() {

  return (
    <Wrapper className="App">
      <UserDetails />
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding:20px;
`


export default App
