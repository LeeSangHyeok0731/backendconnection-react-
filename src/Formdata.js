import React from 'react';
import styled from 'styled-components'

const Form = styled.form`

`

function onGeoOk() {
    const url = `https://port-0-tofaker-backend-lzsaeexf05f2c47e.sel4.cloudtype.app/api/v1/feed/random`;
    fetch(url).then(response => response.json())
    .then(data => {
        console.log(data)
        /*const idNumber = document.getElementById("id");
        const contents = document.getElementById("content");
        idNumber.innerText = data.id;
        contents.innerText = data.title;
        console.log(data.pictureUrl);


        const Img = document.getElementById("emoji");
        Img.onload = function() {
           Img.width =Img.naturalWidth / 8;
           Img.height =Img.naturalHeight / 8;
        };
        Img.src = data.pictureUrl;
*/
    });
}

function submitForm() {
    const form = document.getElementById('myForm');

    console.log(form)

    const formData = new FormData(form);

    const url = 'https://port-0-tofaker-backend-lzsaeexf05f2c47e.sel4.cloudtype.app/api/v1/feed'; // API의 URL로 변경하세요.

    for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

onGeoOk();

function Godata() {
    return(
        <Form>        
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" required /><br /><br />
            
            <label for="content">Content:</label>
            <input type="text" id="content" name="content" required /><br /><br />
            
            <label for="pictureUrl">Picture URL:</label>
            <input type="text" id="pictureUrl" name="pictureUrl" /><br /><br />

            <button type="button" onclick="submitForm()">Submit</button>
        </Form>
    )
}

