import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AppBar, Toolbar, Button, Typography } from "@mui/material"; // Material-UI 컴포넌트
import "./App.css";
import Main from "./pages/Main";

function App() {
  // const isLogin = useSelector((state) => state.auth.isLogin); // Redux 상태에서 로그인 정보 가져오기
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const logout = () => {
  //   dispatch({ type: "LOG_OUT" }); // Redux 액션 호출
  //   navigate("/login"); // 로그아웃 후 로그인 페이지로 이동
  // };

  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
