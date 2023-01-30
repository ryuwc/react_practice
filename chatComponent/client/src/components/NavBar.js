import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex w-4/5 mx-auto h-20 items-center justify-between">
      <Link to="/">
        <img src="https://image.fmkorea.com/files/attach/new2/20220411/486616/3116388431/4514462515/cf15576fa55df7ecbdf5507568f49578.jpg" alt="" style={{width: '70px'}} />
      </Link>
      <div className="header_button_group">
        <div className="flex items-center">
          <Link to="/chat">
            <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none rounded px-3 py-2 leading-6 bg-red-600 text-white hover:text-white hover:bg-red-700 focus:ring-opacity-50 active:bg-red-700">
              채팅
            </button>
          </Link>
          <Link to="/login">
            <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none rounded px-3 py-2 leading-6 bg-red-600 text-white hover:text-white hover:bg-red-700 focus:ring-opacity-50 active:bg-red-700">
              로그인
            </button>
          </Link>
          <Link to="/signup">
            <button type="button" className="mx-4 inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none rounded px-3 py-2 leading-6 border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:border-gray-600 dark:focus:ring-gray-600/50 dark:active:border-gray-700">
              회원가입
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
