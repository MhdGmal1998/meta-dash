import React, { useState } from 'react';
import {Buffer} from 'buffer'
const axios = require("axios");


function FormImage() {
    const [file, setFile] = useState({})

    const [img, setImg] = useState({})
    const [imgUrl, setImgUrl] = useState({})

    const onFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', file);
        formData.append('userID','1234')
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        // axios.post("http://localhost:4000/upload", formData, config)
        //     .then((response) => {
        //         alert("The file is successfully uploaded");
        //     }).catch((error) => {
        //         alert('the error is' + error.response.data)
        //     });
    }
    const onChange = (e) => {

    }


    return (
        <div className='form'>
            <form onSubmit={(e) => onFormSubmit(e)}>
                <h1>File Upload</h1>
                <input type="file" name="image" onChange={(e) => {
                    setFile(e.target.files[0])
                }} />
                <button type="submit">Upload</button>
            </form>

            <button onClick={() => {
                axios.get('http://localhost:4000/getImage').then((response) => {
                    const img = response.data.data.item[1].image.data.data;
                    const buffer = new Buffer(img).toString('base64');
                    setImgUrl(buffer)
                    console.log({ buffer })
                }).catch((error) => {
                    console.log(error)
                })
            }}>
                Fetch image from the server
            </button>

            <img src={"data:image/jpeg;base64,"+imgUrl} style={{
                width: '100px',
                height: '100px'
            }} />
        </div>
    );
}

export default FormImage;