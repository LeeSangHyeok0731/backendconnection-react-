import React, { useState } from 'react';
import styled from 'styled-components';

const ProfilWrapper = styled.div`
  background-color: skyblue;
  width: 500px;
  height: 150px;
  display: flex;
  align-items: center;
  position: relative;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  z-index: 0;
  background-color: red;
`;

const P = styled.p`
  margin: 0;
`;

const OnImgChanger = styled.button`
  background-color: white;
  padding: 10px;
  border-radius: 5px;
`;

const HandleImageChangeWrapper = styled.div`
  position: absolute;
  top: 0; /* 상단 위치 지정 */
  left: 0; /* 좌측 위치 지정 */
  background-color: tomato;
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.visible ? 'flex' : 'none')}; /* flex로 변경하여 가운데 정렬 가능 */
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  z-index: 10; /* 다른 요소 위에 위치하도록 설정 */
`;

const Input = styled.input`
  color: white;
  margin-top: 10px; /* 간격 추가 */
`;

function Profil() {
  const [imageSrc, setImageSrc] = useState('https://pub-9b6750bc62f84a5c943b4295f6ee659d.r2.dev/f60e6d8b-55a9-4805-bf1b-91228e7b1689-20240530_155924.jpg');
  const [isImageChangeVisible, setIsImageChangeVisible] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onImgChange = () => {
    setIsImageChangeVisible((prev) => !prev); // 이전 값의 반대로 설정
  };

  return (
    <ProfilWrapper>
      <Img src={imageSrc} alt="Profile" />
      <OnImgChanger onClick={onImgChange}>
        <P>사진 변경하기</P>
      </OnImgChanger>
      <HandleImageChangeWrapper visible={isImageChangeVisible}>
        <OnImgChanger onClick={onImgChange}>닫기</OnImgChanger>
        <Input type="file" onChange={handleImageChange} />
      </HandleImageChangeWrapper>
    </ProfilWrapper>
  );
}

export default Profil;
