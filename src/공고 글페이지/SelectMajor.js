/*import React, { useState } from "react";
import styled from "styled-components";

const MajorBox = styled.div`
    width: 100px;
    height: 40px;
    background-color: ${(props) => props.bgColor};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius:15px;
`;

const MajorBoxWrapper = styled.div`
    display:grid;
    grid-template-columns: 100px 100px 100px 100px;/*간격이 200px짜리 세로줄을 만든다
    grid-template-rows: 50px 50px;
    column-gap: 20px
`

const Submit = styled.button`      
    width:autopx;
    height:40px;
    background-color:white;
    grid-column: 2/4;
    grid-row:3;
`

function SelectMajor({ onSubmit }) {  
  const [bgColor, setBgColors] = useState({
    0: "white",
    1: "white",
    2: "white",
    3: "white",
    4: "white",
    5: "white",
    6: "white"
  });

  const [selected, setSelected] = useState({
    0: "unSelected",
    1: "unSelected",
    2: "unSelected",
    3: "unSelected",
    4: "unSelected",
    5: "unSelected",
    6: "unSelected"
  });

  const handleClick = (id) => {
    setBgColors((prevColors) => ({
      ...prevColors,
      [id]: prevColors[id] === "white" ? "yellow" : "white"
    }));

    setSelected((prevSelected) => ({
      ...prevSelected,
      [id]: prevSelected[id] === "unSelected" ? "Selected" : "unSelected"
    }));
  };

  const SubmitNotion = () => {
    let sendMajor = [];
    Object.keys(selected).forEach((key) => {
      if (selected[key] === "Selected") {
        sendMajor.push(key);
      }
    });
    console.log(sendMajor)
    onSubmit(sendMajor);
  }
  return (
    <MajorBoxWrapper>
      <MajorBox bgColor={bgColor[0]} onClick={() => handleClick(0)}>FrontEnd</MajorBox>
      <MajorBox bgColor={bgColor[1]} onClick={() => handleClick(1)}>BackEnd</MajorBox>
      <MajorBox bgColor={bgColor[2]} onClick={() => handleClick(2)}>Design</MajorBox>
      <MajorBox bgColor={bgColor[3]} onClick={() => handleClick(3)}>Ios</MajorBox>
      <MajorBox bgColor={bgColor[4]} onClick={() => handleClick(4)}>Android</MajorBox>
      <MajorBox bgColor={bgColor[5]} onClick={() => handleClick(5)}>Devops</MajorBox>
      <MajorBox bgColor={bgColor[6]} onClick={() => handleClick(6)}>AI</MajorBox>
      <Submit onClick={SubmitNotion}>제출하기</Submit>
    </MajorBoxWrapper>
  );
};

export default SelectMajor*/