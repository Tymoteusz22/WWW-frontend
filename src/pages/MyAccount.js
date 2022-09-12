import React from "react";
import {Button, Table} from "react-bootstrap";
import axios from "axios";

export const MyAccount = () => {

    const urlChangeUsername = "http://127.0.0.1:8080/changeUsername" // <- not implemented
    const urlChangePassword = "http://127.0.0.1:8080/changePassword" // <- not implemented

    const handleChangeUsername = async (e) => {
        e.preventDefault();
        let config = {headers: {"Content-Type": "application/json"}};
        /*
        let response;
        await axios.put(urlChangeUsername, e.target[1].value, config)
            .then((res)=>{response=res})
            .catch((err)=>{console.log("error: ", err)})
        if (response.status === 200){
            alert("Pomyślnie zmieniono nazwę");
        } else {
            alert("Coś poszło nie tak");
        }
         */
        console.log(e.target[2].value);
    }

    const handleChangePassword = async (e) => {
        e.preventDefault();
        let config = {headers: {"Content-Type": "application/json"}};
        /*
        let response;
        await axios.put(urlChangePassword, e.target[1].value, config)
            .then((res)=>{response=res})
            .catch((err)=>{console.log("error: ", err)})
        if (response.status === 200){
            alert("Pomyślnie zmieniono hasło");
        } else {
            alert("Coś poszło nie tak");
        }
        */
        console.log(e.target[1].value);
    }


    return(
        <div className="main">
            <form id="changeUsernameForm" onSubmit={handleChangeUsername}/>
            <form id="changePasswordForm" onSubmit={handleChangePassword}/>
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th className="tab">
                            <p>Informacje o koncie</p>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <label>Nazwa użytkownika:</label>
                        </td>
                        <td>
                            <label id="username">NAZWA UŻYTKOWNIKA</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Data rejestracji:</label>
                        </td>
                        <td>
                            <label id="registrationDate">22.22.2222</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Liczba folderów użytkownika:</label>
                        </td>
                        <td>
                            <label id="userDirectoriesCount">55</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Liczba zdjęć we wszystkich folderach:</label>
                        </td>
                        <td>
                            <label id="userImagesCount">24242424</label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>Najwięcej ulubionych w folderze o nazwie:</label>
                        </td>
                        <td>
                            <label id="mostFavouritesFolderName">Wakacje 2022</label>
                        </td>
                    </tr>
                    </tbody>
                </Table>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <p>Zmiana danych</p>
                            </th>
                            <th>
                                <p>Obecne dane</p>
                            </th>
                            <th>
                                <p>Nowe dane</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="alignCenter">
                                <Button type="submit" form="changeUsernameForm">Zmień nazwę</Button>
                            </td>
                            <td>
                                <input id="currentUsername" type="text" form="changeUsernameForm" placeholder="Obecna nazwa" required/>
                            </td>
                            <td>
                                <input id="newUsername" type="text" minLength="5" maxLength="15" form="changeUsernameForm" placeholder="Nowa nazwa" required/>
                            </td>
                        </tr>
                        <tr>
                            <td className="alignCenter">
                                <Button type="submit" form="changePasswordForm">Zmień hasło</Button>
                            </td>
                            <td>
                                <input id="currentPassword" type="password" form="changePasswordForm" placeholder="Obecne hasło" required/>
                            </td>
                            <td>
                                <input id="newPassword" type="password" minLength="8" maxLength="20" form="changePasswordForm" placeholder="Nowe hasło" required/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};