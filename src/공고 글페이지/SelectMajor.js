import React, { useState } from "react";
import styled from "styled-components";

const MajorBox = styled.div`
    width: 100px;
    height: 40px;
    background-color: ${({ isSelected }) => (isSelected ? 'yellow' : 'white')};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius:15px;
`;

const MajorBoxWrapper = styled.div`
    display:grid;
    grid-template-columns: 100px 100px 100px 100px;/*간격이 200px짜리 세로줄을 만든다*/
    grid-template-rows: 50px;
    column-gap: 20px
`

function SelectMajor() {
  const [selectedMajor, setSelectedMajor] = useState(null);

  const handleClick = (major) => {
    setSelectedMajor(major);
  };

  return (
    <MajorBoxWrapper>
      <MajorBox
        isSelected={selectedMajor === "Front"}
        onClick={() => handleClick("Front")}
      >
        FrontEnd
      </MajorBox>
      <MajorBox
        isSelected={selectedMajor === "Back"}
        onClick={() => handleClick("Back")}
      >
        BackEnd
      </MajorBox>
      <MajorBox
        isSelected={selectedMajor === "Des"}
        onClick={() => handleClick("Des")}
      >
        Design
      </MajorBox>
      <MajorBox
        isSelected={selectedMajor === "Dev"}
        onClick={() => handleClick("Dev")}
      >
        Devops
      </MajorBox>
      <MajorBox
        isSelected={selectedMajor === "Ios"}
        onClick={() => handleClick("Ios")}
      >
        Ios
      </MajorBox>
      <MajorBox
        isSelected={selectedMajor === "And"}
        onClick={() => handleClick("And")}
      >
        Android
      </MajorBox>
      <MajorBox
        isSelected={selectedMajor === "Ai"}
        onClick={() => handleClick("Ai")}
      >
        AI
      </MajorBox>
    </MajorBoxWrapper>
  );
}

export default SelectMajor;