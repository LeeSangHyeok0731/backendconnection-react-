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
`;

const Img2 = styled.img`
  width: 500px;
  height: 500px;
  z-index: 0;
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
  top: 0; 
  left: 0; 
  background-color:white;
  width: 100vw;
  height: 100vh;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Input = styled.input`
  color: white;
  margin-top: 10px; /* 간격 추가 */
`;

function imgToServer(pictureUrl) {
  const url = 'https://daram-gsm.kro.kr/';  

  fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': '7470c985ca283e19082b9ad5f875931e',
      'email': 's24066@gsm.hs.kr', 
    },      
    /*body: formData,*/
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

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
    imgToServer(event.target.files[0].name);
  };

  const onImgChange = () => {
    setIsImageChangeVisible((prev) => !prev);
  };

  

  return (
    <ProfilWrapper>
      <Img src={imageSrc} alt="Profile" />
      <OnImgChanger onClick={onImgChange}>
        <P>사진 변경하기</P>
      </OnImgChanger>
      <HandleImageChangeWrapper visible={isImageChangeVisible}>
        <Img2 src={imageSrc} alt="Profile" />
        <OnImgChanger onClick={onImgChange}>닫기</OnImgChanger>
        <Input type="file" onChange={handleImageChange} />
      </HandleImageChangeWrapper>
    </ProfilWrapper>
  );
}

export default Profil;