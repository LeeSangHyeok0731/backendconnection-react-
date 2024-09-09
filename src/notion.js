import React, { useState } from "react"; 
import styled from "styled-components";
import WriteNotionGpt from "./공고 글페이지/WriteNotion-Gpt"; 

const WriteJova = styled.div`
    background-color: skyblue;
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const P = styled.p`
    margin: 0;
`;

const WriteButton = styled.button`
    background-color: tomato;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 80px;
    margin-top: 10px;
`;

const WritePage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: white;
    z-index: 1;
    display: ${(props) => (props.show ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const WritttenNotion = styled.div`
    background-color: white;
    border-radius: 15px;
    width: 450px;
    height: 50px;
    margin-top: 25px;
`;

function Notion() {
    const [isWritePageVisible, setWritePageVisible] = useState(false);
    const [notions, setNotions] = useState([]); // 여러 개의 전공과 제목 저장

    const OnWritePage = () => {
        setWritePageVisible((prevState) => !prevState);
    };

    const handleMajorSubmit = ({ majors, title }) => {
        setNotions((prevNotions) => [...prevNotions, { majors, title }]); // 새로운 값을 배열에 추가
        OnWritePage();
    };

    return (
        <WriteJova>
            <WritePage show={isWritePageVisible}>
                <WriteNotionGpt onSubmit={handleMajorSubmit} />
                <WriteButton onClick={OnWritePage}>돌아가기</WriteButton>
            </WritePage>

            <WriteButton onClick={OnWritePage}>글 쓰기</WriteButton>

            {notions.map((notion, index) => (
                <WritttenNotion key={index}>
                    <span>{notion.title}</span>
                    <P>선택된 전공: {notion.majors.join(", ")}</P>
                </WritttenNotion>
            ))}
        </WriteJova>
    );
}

export default Notion;
