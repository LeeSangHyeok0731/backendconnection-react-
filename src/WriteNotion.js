import React from "react";
import styled from "styled-components";

const WriteWrapper = styled.div`
    height:500px;
    width:500px;
    background-color:skyblue;
`

const InputTitle = styled.input`
    width:450px;
`

function WriteNotion(){
    return(
        <WriteWrapper>
            <InputTitle>제목 적기</InputTitle>
        </WriteWrapper>
    )
}

export default WriteNotion