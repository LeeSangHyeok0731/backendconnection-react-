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
    grid-column: 1/10;
    grid-row: 2/3;
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
    display:grid;
    grid-template-columns: repeat(10, 45px);
    grid-template-rows: repeat(2, 25px);
`;

const Delete = styled.div`
    width:50px;
    height:25px;
    grid-column: 10/11;
    grid-row: 1/2;

`

const TitleText = styled.span`
    grid-column:1/11;
    grid-row:1/2;
`

const DeleteAlert = styled.div`
    display:block;
    posiiton: absolution;
    backgroun-color:red;
`

const MySvgIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      aria-hidden="true"
      style={{ pointerEvents: 'none', display: 'inherit', width: '100%', height: '100%' }}
    >
      <path d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5M10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5m0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5" />
    </svg>
  );

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

    const DeleteNotion = (keyNumber) => {
        setNotions((prevNotions) => prevNotions.filter((_, i) => i !== index));
    }

    return (
        <WriteJova>
            <WritePage show={isWritePageVisible}>
                <WriteNotionGpt onSubmit={handleMajorSubmit} />
                <WriteButton onClick={OnWritePage}>돌아가기</WriteButton>
            </WritePage>

            <WriteButton onClick={OnWritePage}>글 쓰기</WriteButton>

            {notions.map((notion, index) => (
                <WritttenNotion key={index}>
                    <TitleText>{notion.title}</TitleText>
                    <P>{notion.majors.join(", ")}</P>
                    <Delete onClick={() => DeleteNotion(index)}>
                        <MySvgIcon />
                    </Delete>
                </WritttenNotion>
            ))}
        </WriteJova>
    );
}

export default Notion;