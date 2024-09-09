import React, { useState, useEffect } from "react"; 
import styled from "styled-components";
import WriteNotionGpt from "./공고 글페이지/WriteNotion-Gpt"; 

const WriteJova = styled.div`
    background-color: skyblue;
    width: 500px;
    height: 500px;
    display: flex;
    justify-content: center;
    position: relative;
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
    width: 80
px;
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
    margin-top: 50px;
    position: absolute;
`;

function Notion() {
    const [isWritePageVisible, setWritePageVisible] = useState(false);
    const [majors, setMajors] = useState([]);
    const [selectedMajors, setSelectedMajors] = useState([]);

    const OnWritePage = () => {
        setWritePageVisible((prevState) => !prevState);
    };

    const handleMajorSubmit = (sendMajor) => {
        setMajors(sendMajor);
    };

    useEffect(() => {
        const newSelectedMajors = majors.map((major) => {
            if (major === 0) return "FrontEnd";
            if (major === 1) return "BackEnd";
            if (major === 2) return "Design";
            if (major === 3) return "Ios";
            if (major === 4) return "Android";
            if (major === 5) return "Devops";
            if (major === 6) return "AI";
            return null;
        });
        setSelectedMajors(newSelectedMajors);
    }, [majors]);

    return (
        <WriteJova>
            <WritePage show={isWritePageVisible}>
                <WriteNotionGpt onSubmit={handleMajorSubmit} />
                <WriteButton onClick={OnWritePage}>돌아가기</WriteButton>
            </WritePage>

            <WriteButton onClick={OnWritePage}>글 쓰기</WriteButton>

            <WritttenNotion>
                <span>제목</span>
                <P>선택된 전공: {selectedMajors.join(", ")}</P>
            </WritttenNotion>
        </WriteJova>
    );
}

export default Notion;
