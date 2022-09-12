import React, {useContext} from "react";
import {Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

import {UserContext} from "../UserContext";


const NavigationBarLinks = () => {
    let links;

    const handleLogout = () => {
        localStorage.removeItem("user")
        window.location="/";
    }

    if (localStorage.getItem("user") !== null) {
        links = (
            <>
                <Nav.Item>
                    <NavLink className="nav-link" to="/account">Moje konto</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="nav-link" to="/upload">Dodaj zdjęcie</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="nav-link" to="/search">Przeglądaj</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="nav-link right" exact to="/" onClick={handleLogout}>Wyloguj</NavLink>
                </Nav.Item>
            </>
        );
    } else {
        links = (
            <>
                <Nav.Item>
                    <NavLink className="nav-link right" to="/register">Rejestracja</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink className="nav-link right" to="/login">Logowanie</NavLink>
                </Nav.Item>
            </>
        );
    }
    return <>{links}</>;
}

export const NavigationBar = () => {
    const user = useContext(UserContext)

    return(
        <Navbar collapseOnSelect fixed="top" className="bg-light justify-content-between">
            <Navbar.Collapse className="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <NavLink exact to="/" className="nav-link">Strona główna</NavLink>
                        </Nav.Item>
                    <NavigationBarLinks user={user}/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};