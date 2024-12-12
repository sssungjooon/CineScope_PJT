import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import MovieList from "../components/MovieList";
// import "../App.css";

function Main() {
//   const isLogin = useSelector((state) => state.auth.isLogin); // Redux 상태에서 로그인 정보 가져오기
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const logout = () => {
//     dispatch({ type: "LOG_OUT" }); // Redux 액션 호출
//     navigate("/login"); // 로그아웃 후 로그인 페이지로 이동
//   };

  return (
    <div>
      <AppBar position="fixed" style={{ backgroundColor: "rgb(11, 18, 36)" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" className="app-title" style={{ flexGrow: 1 }}>
            부귀영화
          </Typography>
          <div>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/recommended">
              Recommend
            </Button>
            {/* {!isLogin ? (
              <Button color="inherit" component={Link} to="/login">
                LogIn
              </Button>
            ) : (
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            )} */}
            <Button color="inherit" component={Link} to="/mypage">
              MyPage
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: "64px" }}>
        {/* AppBar가 고정되었으므로 아래 컴포넌트는 margin을 조정 */}
        <p>Welcome to CineScope!</p>
        <MovieList></MovieList>
      </div>
    </div>
  );
}

export default Main;
