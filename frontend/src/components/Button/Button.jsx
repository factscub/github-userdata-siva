import React from 'react'
import styled from 'styled-components'
const Button = ({ children }) => {
    return (
        <ButtonWrapper>
            {children}
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.span`
  background-color: #fff000;
  border-radius: 5px;
  margin-right:10px;
  margin-top:5px ;
  color: #000;
  font-weight: bold;
  padding: 10px 15px;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid black;
  user-select: none;
  -webkit-user-select: none;

`
export default Button;

