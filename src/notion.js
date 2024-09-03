import React, { useState } from "react";
import styled from "styled-components";

const WriteJova = styled.div`
    background-color: skyblue;
    width: 500px;
    height: 500px;
`;

const WriteNotion = styled.button`
    background-color: tomato;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const WritePage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: tomato;
    z-index: 1;
    display: ${(props) => (props.show ? "block" : "none")};
`;

function Notion() {
    const [isWritePageVisible, setWritePageVisible] = useState(false);

    const OnWritePage = () => {
        setWritePageVisible(true);
    };

    return (
        <WriteJova>
            <WritePage show={isWritePageVisible}>
                <WriteNotion onClick={OnWritePage}>돌아가기</WriteNotion>
            </WritePage>
            <WriteNotion onClick={OnWritePage}>
                글 쓰기
            </WriteNotion>
        </WriteJova>
    );
}

export default Notion;