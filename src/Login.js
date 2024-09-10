import React from 'react';
import styled from 'styled-components';

const LoginWrapper = styled.form`

`

const Button = styled.button`
    background-color:skyblue;
    display:flex;
    border-radius:15px;
    width:250px;
    height:50px;
    align-items:center;
    justify-content:center;
`

function LoginLogic({title, content}) {
    console.log(title)
    console.log(content)
}

function Login() {
    return(
        <LoginWrapper>        
            <label for="title">아이디: </label>
            <input type="text" id="title" name="title" required /><br /><br />
            
            <label for="content">비밀번호: </label>
            <input type="text" id="content" name="content" required /><br /><br />
            
            <label for="pictureUrl">서버주에게 하고싶은 말: </label>
            <input type="text" id="pictureUrl" name="pictureUrl" /><br /><br />

            <Button type="button" onClick="submitForm">Submit</Button>
        </LoginWrapper>
    )
}

export default Login