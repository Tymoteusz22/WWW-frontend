import React, {useContext} from "react";
import {Button, Table} from "react-bootstrap";
import {UserContext} from "../UserContext";
import axios from "axios";


export const LoginPage = () => {
    const urlGetToken = "http://127.0.0.1:8080/generateToken"

    const {setUser} = useContext(UserContext);

    const handleLogin = async (e) => {
        e.preventDefault()
        if (e.target[0].value === "" || e.target[1].value === ""){
            alert("Podaj obie wartości");
        } else {
            let config = {headers: {"Content-Type": "application/json"}};
            let response;
            await axios.post(urlGetToken, {"userCredentials": {"name": e.target[0].value, "password": e.target[2].value}}, config)
                .then((res)=>{response=res})
                .catch((err)=>{console.log("error: ", err)})
            if (response.status === 200){
                const user = {"token": response.data};
                setUser(user);
                window.location = "/account";
            } else {
                alert("Coś poszło nie tak")
            }
        }
    }

    return(
        <div className="main">
            <form id="login" onSubmit={handleLogin}/>
            <Table className="tableCenter">
                <tr>
                    <td>
                        <label htmlFor="username">Nazwa Użytkownika</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input id="username" type="text" form="login" placeholder="Nazwa Użytkownika" required/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="password">Hasło</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input id="password" type="password" form="login" placeholder="Hasło" required/>
                    </td>
                </tr>
                <tr>
                    <td className="alignCenter">
                        <Button className="defaultButton" type="submit" form="login" >Zaloguj</Button>
                    </td>
                </tr>
            </Table>
        </div>
    );
};
