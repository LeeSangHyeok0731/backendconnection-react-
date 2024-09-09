import React, { useState, useEffect } from "react"; // useEffect를 추가로 가져옵니다.
import styled from "styled-components";
import WriteNotionGpt from "./공고 글페이지/WriteNotion-Gpt"; // 다른 컴포넌트를 가져옵니다.

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
    width: 80px;
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
    // 글쓰기 페이지를 보여줄지 여부를 관리하는 상태 (초기값: 안보임)
    const [isWritePageVisible, setWritePageVisible] = useState(false);

    // 사용자가 선택한 전공을 저장할 상태 (배열, 초기값은 빈 배열)
    const [majors, setMajors] = useState([]);

    // 선택된 전공들을 저장할 상태 (배열로 관리)
    const [Selectedmajors, setSelectedMajors] = useState([]);

    // 글쓰기 페이지를 열고 닫는 함수
    const OnWritePage = () => {
        setWritePageVisible((prevState) => !prevState); // 현재 상태의 반대값으로 설정 (보였다가 안보였다가)
    };

    // 사용자가 전공을 선택하고 제출하면 이 함수가 호출됩니다.
    const handleMajorSubmit = (sendMajor) => {
        // setMajors를 호출하여 majors 상태를 업데이트 합니다.
        // 하지만 setState는 비동기적으로 처리되므로, 바로 이 값이 반영되진 않습니다.
        setMajors(sendMajor); // 상태 업데이트
    };

    // majors 상태가 변경될 때마다 실행되는 함수 (useEffect)
    useEffect(() => {
        // 새로 선택된 전공을 저장할 임시 배열
        let newSelectedMajors = [];
        
        // majors 배열을 순회하며 각 전공 번호에 따라 문자열로 변환
        let i = 0;
        while (i < majors.length) {
            if (majors[i] === 0) {
                newSelectedMajors.push("FrontEnd");
            } else if (majors[i] === 1) {
                newSelectedMajors.push("BackEnd");
            } else if (majors[i] === 2) {
                newSelectedMajors.push("Design");
            } else if (majors[i] === 3) {
                newSelectedMajors.push("Ios");
            } else if (majors[i] === 4) {
                newSelectedMajors.push("Android");
            } else if (majors[i] === 5) {
                newSelectedMajors.push("Devops");
            } else if (majors[i] === 6) {
                newSelectedMajors.push("AI");
            }
            i++; // 배열을 순회하기 위해 i 증가
        }

        // 변환된 전공 배열을 상태로 설정 (화면에 표시될 수 있게)
        setSelectedMajors(newSelectedMajors);
    }, [majors]); // majors 상태가 변경될 때마다 이 useEffect가 실행됩니다.

    return (
        <WriteJova>
            {/* 글쓰기 페이지를 조건부로 보여줍니다 */}
            <WritePage show={isWritePageVisible}>
                {/* WriteNotionGpt 컴포넌트에 onSubmit 속성을 전달하여 사용자가 전공을 선택했을 때 handleMajorSubmit이 호출되도록 합니다. */}
                <WriteNotionGpt onSubmit={handleMajorSubmit} />
                {/* 글쓰기 페이지를 닫는 버튼 */}
                <WriteButton onClick={OnWritePage}>돌아가기</WriteButton>
            </WritePage>

            {/* 글쓰기 페이지를 여는 버튼 */}
            <WriteButton onClick={OnWritePage}>글 쓰기</WriteButton>

            {/* 선택된 전공을 화면에 표시 */}
            <WritttenNotion>
                <span>제목</span>
                <P>선택된 전공: {Selectedmajors.join(", ")}</P> 
            </WritttenNotion>
        </WriteJova>
    );
}

export default Notion;
