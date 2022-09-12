import React from "react";
import {Button, Table} from "react-bootstrap";
import axios from "axios";


export const RegisterPage = () => {
    const urlToRegisterUser = "http://127.0.0.1:8080/createUser";

    const handleRegister = async (e) => {
        e.preventDefault();
        if (e.target[0].value === "" || e.target[1].value === "" || e.target[2].value === "" || e.target[3].value === ""){
            alert("Przynajmniej jedno pole jest puste");
        } else if (e.target[2].value !== e.target[3].value){
            alert("Hasła są różne");
        } else {
            let response;
            let config = {headers: {"Content-Type": "application/json"}}
            await axios.post(urlToRegisterUser, {"userCredentials": {"name": e.target[0].value, "password": e.target[2].value}, "email": e.target[1].value}, config)
                .then((res)=>{response = res})
                .catch(()=>{alert("Podana nazwa jest już zarejestrowana")})
            if (response.status === 200){
                alert("Użytkownik został zarejestrowany");
            } else {
                alert("Coś poszło nie tak");
            }
        }
    }

    return(
        <div className="main">
            <form id="register" onSubmit={handleRegister}/>
            <Table>
                <tr>
                    <td>
                        <label htmlFor="username">Nazwa Użytkownika</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input id="username" type="text" minLength="5" maxLength="15" form="register" placeholder="Nazwa Użytkownika" required/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="userEmail">Email</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input id="userEmail" type="text" form="register" placeholder="Email" required/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="password">Hasło</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input id="password" type="password" minLength="8" maxLength="20" form="register" placeholder="Hasło" required/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="confirmPassword">Powtorz Haslo</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input id="confirmPassword" type="password" minLength="8" maxLength="20" form="register" placeholder="Powtorz Haslo" required/>
                    </td>
                </tr>
                <tr>
                    <td className="alignCenter">
                        <Button type="submit" form="register" className="defaultButton">Zarejestruj</Button>
                    </td>
                </tr>
            </Table>
        </div>
    )
}