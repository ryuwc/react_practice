import React from 'react'
import NavBar from "./components/NavBar";
import SignUp from "./pages/SignUp";
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Chat from "./components/chatting/Chat";
import Join from "./pages/Join";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/" element={<Join />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
