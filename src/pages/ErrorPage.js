import React from "react";

export const ErrorPage = () => {
    return (
        <div className="main">
            <div className="errorDiv">
                <label className="error">Strona nie istnieje, jeśli ją widzisz to:</label>
                <label className="error">a) Nie masz dostępu</label>
                <label className="error">b) Strona nie istnieje</label>
                <label className="error">c) Szukałeś kotków</label>
                <label className="error">W dwóch pierwszych nie pomogę, ale <a href="https://www.google.com/search?q=koty&client=opera-gx&hs=9Gb&sxsrf=ALiCzsbvi2h1d9bQqdChawYfYyjNMch2jA:1662942299009&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj6rI7o_o36AhXNlYsKHZhXD7wQ_AUoAXoECAEQBA&biw=1495&bih=764&dpr=1.25">koty</a></label>
                <label className="return">Możesz też wrócić na stronę główną <a href="/">tutaj</a> </label>
            </div>
        </div>
    )
}