import React from "react";
import {Table} from "react-bootstrap";

export const HomePage = () => {
    return(
        <div className="main">
            <Table>
                <thead>
                    <tr>
                        <th>
                            <p>Statystyki</p>
                        </th>
                        <th>
                            <p>Liczby</p>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><label>Liczba użytkowników</label></td>
                        <td><label id="allUsersCount" className="bold">22</label></td>
                    </tr>
                    <tr>
                        <td><label>Nowych</label></td>
                        <td><label id="newUsers" className="bold">424</label></td>
                    </tr>
                    <tr>
                        <td><label>Liczba wszystkich zdjęć</label></td>
                        <td><label id="allImagesCount" className="bold">242424</label></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};