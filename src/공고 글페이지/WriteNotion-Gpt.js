import React, { useState } from "react";
import styled from "styled-components";

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

const MajorBox = styled.div`
    width: 100px;
    height: 40px;
    background-color: ${(props) => props.bgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 15px;
`;

const MajorBoxWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(2, 50px);
    column-gap: 20px;
    margin-bottom: 20px;
`;

const Submit = styled.button`
    width: auto;
    height: 40px;
    background-color: white;
    grid-column: 2/4;
    grid-row: 3;
`;

function WriteNotionGpt({ onSubmit }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [majors, setMajors] = useState([]);

    const [bgColor, setBgColors] = useState({
        0: "white",
        1: "white",
        2: "white",
        3: "white",
        4: "white",
        5: "white",
        6: "white",
    });

    const [selected, setSelected] = useState({
        0: "unSelected",
        1: "unSelected",
        2: "unSelected",
        3: "unSelected",
        4: "unSelected",
        5: "unSelected",
        6: "unSelected",
    });

    const handleClick = (id) => {
        setBgColors((prevColors) => ({
            ...prevColors,
            [id]: prevColors[id] === "white" ? "yellow" : "white",
        }));

        setSelected((prevSelected) => ({
            ...prevSelected,
            [id]: prevSelected[id] === "unSelected" ? "Selected" : "unSelected",
        }));
    };

    const SubmitNotion = () => {
        let sendMajor = [];
        let Title = title;
        let Content = content;
        let count = 0;
        Object.keys(selected).forEach((key) => {
            if (selected[key] === "Selected") {
                if (key === "0") sendMajor.push("FrontEnd");
                if (key === "1") sendMajor.push("BackEnd");
                if (key === "2") sendMajor.push("Design");
                if (key === "3") sendMajor.push("Ios");
                if (key === "4") sendMajor.push("Android");
                if (key === "5") sendMajor.push("Devops");
                if (key === "6") sendMajor.push("AI");
                count++;
            }
        });
        if(Title === "" || count === 0 || Content === ""){
            alert("모든 정보를 올바르게 입력해 주세요");
        } else {
            console.log("선택된 전공:", sendMajor);
            console.log(Title);
            onSubmit({ majors: sendMajor, title: Title });
            setTitle("");
            setContent("");
            setBgColors({
                0: "white",
                1: "white",
                2: "white",
                3: "white",
                4: "white",
                5: "white",
                6: "white",
            });
            setSelected({
                0: "unSelected",
                1: "unSelected",
                2: "unSelected",
                3: "unSelected",
                4: "unSelected",
                5: "unSelected",
                6: "unSelected",
            })
        }
        /*console.log(Content);
        onSubmit(Content);*/
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
            <MajorBoxWrapper>
                <MajorBox bgColor={bgColor[0]} onClick={() => handleClick(0)}>FrontEnd</MajorBox>
                <MajorBox bgColor={bgColor[1]} onClick={() => handleClick(1)}>BackEnd</MajorBox>
                <MajorBox bgColor={bgColor[2]} onClick={() => handleClick(2)}>Design</MajorBox>
                <MajorBox bgColor={bgColor[3]} onClick={() => handleClick(3)}>Ios</MajorBox>
                <MajorBox bgColor={bgColor[4]} onClick={() => handleClick(4)}>Android</MajorBox>
                <MajorBox bgColor={bgColor[5]} onClick={() => handleClick(5)}>Devops</MajorBox>
                <MajorBox bgColor={bgColor[6]} onClick={() => handleClick(6)}>AI</MajorBox>
            </MajorBoxWrapper>
            <Submit onClick={SubmitNotion}>제출하기</Submit>
        </WriteWrapper>
    );
}

export default WriteNotionGpt;
