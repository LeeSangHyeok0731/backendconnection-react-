import React, { useState } from 'react';
import styled from 'styled-components';

const ProfilWrapper = styled.div`
  background-color: skyblue;
  width: 500px;
  height: 150px;
  display: flex;
  align-items: center;
  position: relative; /* 추가 */
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  z-index: 1;
  background-color: red;
`;

const P = styled.p`
  margin: 0;
`;

const OnImgChanger = styled.button`
  background-color: white;
`;

const HandleImageChangeWrapper = styled.div`
  position: absolute;
  background-color: red;
  width: 100%;
  height: 100vh;
  display: ${(props) => (props.visible ? 'block' : 'none')}; /* 수정 */
`;

function Profil() {
  const [imageSrc, setImageSrc] = useState('https://pub-9b6750bc62f84a5c943b4295f6ee659d.r2.dev/f60e6d8b-55a9-4805-bf1b-91228e7b1689-20240530_155924.jpg');
  const [isImageChangeVisible, setIsImageChangeVisible] = useState(false); // 추가

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
    setIsImageChangeVisible(true); // 수정
  };

  return (
    <ProfilWrapper>
      <Img src={imageSrc} alt="Profile" />
      <OnImgChanger onClick={onImgChange}>
        <P>사진 변경하기</P>
      </OnImgChanger>
      <HandleImageChangeWrapper visible={isImageChangeVisible}> {/* 수정 */}
        <input type="file" onChange={handleImageChange} />
      </HandleImageChangeWrapper>
    </ProfilWrapper>
  );
}

export default Profil;