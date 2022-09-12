import React from "react";
import {Button} from "react-bootstrap";
import axios from "axios";


export const UploadFilePage = () => {

    const urlToUploadFile = "http://127.0.0.1:8080/uploadFile"

    const handleFileUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("folder", e.target[0].value);
        formData.append("file", e.target[1].value);
        if (e.target[2].value === ""){
            formData.append("description", null);
        } else {
            formData.append("description", e.target[2].value);
        }
        await axios.post(urlToUploadFile, formData);
        e.target.reset();
    }

    return(
        <div className="main">
            <form id="uploadFile" onSubmit={handleFileUpload} />
            <div className="uploadingFile">
                <div className="container">
                    <label htmlFor="folderName">Folder</label>
                    <input id="folderName" type="text" minLength="8" maxLength="40" form="uploadFile" placeholder="Nazwa folderu" required/><br/>
                    <label htmlFor="uploadFileBox">Załącz plik</label>
                    <input id="uploadFileBox" type="file" accept="image/*" form="uploadFile" placeholder="Dodaj" required/>
                    <textarea id="description" form="uploadFile" placeholder="Opis"/>
                    <Button type="submit" form="uploadFile">Wyślij</Button>
                </div>
            </div>
        </div>
    );
};