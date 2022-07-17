import React from "react";  
import {Route, Routes } from "react-router-dom";
import Autenticacion from "./components/Login";

function App() {
    return ( 
        <div className="App">
            <Routes>
                <Route path="/" element={<Autenticacion/>}></Route> 
            </Routes>   
        </div>
    );
} 

export default App;
