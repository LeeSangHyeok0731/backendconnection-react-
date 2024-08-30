import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  /* 추가적인 스타일링을 여기에 작성하세요 */
`;

function Godata() {
  const formRef = useRef(null);  // Form element를 참조하기 위한 ref 설정

  // Component가 처음 렌더링될 때 `onGeoOk` 함수 호출
  useEffect(() => {
    onGeoOk();
  }, []);

  function onGeoOk() {
    const url = `https://port-0-tofaker-backend-lzsaeexf05f2c47e.sel4.cloudtype.app/api/v1/feed/random`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        /* 원하는 데이터를 상태로 저장하고 필요에 따라 렌더링에 사용 */
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  function submitForm() {
    const form = formRef.current;  // ref를 사용하여 form 요소에 접근
    const formData = new FormData(form);

    const url = 'https://port-0-tofaker-backend-lzsaeexf05f2c47e.sel4.cloudtype.app/api/v1/feed';

    // FormData 객체 출력
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <Form ref={formRef}>        
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" required /><br /><br />
      
      <label htmlFor="content">Content:</label>
      <input type="text" id="content" name="content" required /><br /><br />
      
      <label htmlFor="pictureUrl">Picture URL:</label>
      <input type="text" id="pictureUrl" name="pictureUrl" /><br /><br />

      <button type="button" onClick={submitForm}>Submit</button> {/* onClick으로 수정 */}
    </Form>
  );
}

export default Godata;
