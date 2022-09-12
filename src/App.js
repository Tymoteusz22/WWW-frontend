import React, {useState} from "react";

import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {LoginPage} from "./pages/LoginPage";
import {RegisterPage} from "./pages/RegisterPage";
import {MyAccount} from "./pages/MyAccount";
import {Footer} from "./layout/Footer";
import {UploadFilePage} from "./pages/UploadFilePage";
import {NavigationBar} from "./layout/NavigationBar";
import {SearchFoldersPage} from "./pages/SearchFoldersPage";
import {DisplayImagesPage} from "./pages/DisplayImagesPage";
import {ErrorPage} from "./pages/ErrorPage";
import {UserContext} from "./UserContext";


function App() {

    const getUser = () => {
        const user = localStorage.getItem("user");
        return JSON.parse(user);
    }
    const [user, setUser] = useState(getUser)
    const saveUser = () => {
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user)
    }

  return (
      <React.Fragment>
          <Router>
              <UserContext.Provider value = {{user, setUser: saveUser}}>
                  <NavigationBar/>
                  <Routes>
                      <Route exact path="/" element={<HomePage/>}/>
                      <Route path="/login" element={<LoginPage/>}/>
                      <Route path="/register" element={<RegisterPage/>}/>
                      <Route path="/account" element={<MyAccount/>}/>
                      <Route path="/upload" element={<UploadFilePage/>}/>
                      <Route path="/search" element={<SearchFoldersPage/>}/>
                      <Route exact path="/display" element={<DisplayImagesPage/>}/>
                      <Route path="/404" element={<ErrorPage/>}/>
                      <Route path="*" element={<Navigate to ="/404" />}/>
                  </Routes>
              </UserContext.Provider>
          </Router>
          <Footer/>
      </React.Fragment>
  )
}

export default App;
