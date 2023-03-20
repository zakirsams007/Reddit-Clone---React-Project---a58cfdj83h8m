import React from "react";
import "./styles/App.css";
import SideNav from "./components/sidebar/SideNav";
import Header from "./components/Header/Header";
import Main from "./Main";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/createpost/Post";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App container">
      <BrowserRouter>
        <SideNav />
           <Main>
           <Header />
           <Post />
        </Main>   
        </BrowserRouter>
    </div>
  );
}

export default App;
