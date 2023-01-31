import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Chat from "./components/chatting/Chat";
import Join from "./pages/Join";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/" element={<Join />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
