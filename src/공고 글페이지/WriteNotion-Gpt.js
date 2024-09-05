import React, { useState } from "react";
import styled from "styled-components";
import SelectMajor from "./SelectMajor";

// 스타일드 컴포넌트
const WriteWrapper = styled.div`
    height: 500px;
    width: 500px;
    background-color: skyblue;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputTitle = styled.input`
    width: 450px;
    margin-bottom: 20px;
    padding: 10px;
`;

const TextAreaContent = styled.textarea`
    width: 450px;
    height: 200px;
    margin-bottom: 20px;
    padding: 10px;
    resize: none;
`;

function WriteNotionGpt() {
    // 입력 필드를 관리하는 상태
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const [majors, setMajors] = useState([]);

    const handleMajorSubmit = (selectedMajors) => {
        setMajors(selectedMajors);
        console.log(selectedMajors);    
    };

    return (
        <WriteWrapper>
            <InputTitle 
                type="text" 
                placeholder="제목 적기" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}  
            />
            <TextAreaContent 
                placeholder="내용 적기" 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
            />
            <SelectMajor />
            <button onClick={handleMajorSubmit}>제출확인하기</button>
        </WriteWrapper>
    );
}

export default WriteNotionGpt;
