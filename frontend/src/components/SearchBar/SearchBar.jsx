import React from 'react'
import styled from 'styled-components';

const SearchBar = ({setUsername}) => {
  return (
    <Form onSubmit={e => {
        e.preventDefault();
        const formData = new FormData(e.target)
        setUsername(formData.get('username'));
    }}>
        <Input type='text' placeholder='Enter github username' name='username' />
        <Submit type='submit' value='Search'/>

    </Form>
  )
}

const Form =styled.form`
height:35px;
display:flex;
align-items:center;
margin-bottom:20px;

`

const Input = styled.input`
width:100%;
height:inherit;
margin:15px 0;
padding:5px;
border-radius:5px;
border:1px solid black;

`
const Submit = styled.input`
border:1px solid black;
cursor:pointer;
height:inherit;
background-color: #fff000;
border-radius: 5px;
margin-left:20px;
padding:0 10px;
color: #000;
font-weight: bold;
text-align: center;
box-sizing: border-box;
border: 1px solid black;
user-select: none;
-webkit-user-select: none;
`
export default SearchBar