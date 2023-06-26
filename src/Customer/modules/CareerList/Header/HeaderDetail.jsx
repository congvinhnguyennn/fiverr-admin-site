import React from 'react'
import style from "./Header.module.scss"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {logout} from "./../../../slice/UserSlice"
import { Link } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.userReducer.user);
  const { isAuth } = useSelector((state) => state.userReducer);
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
  };
  const dispatch = useDispatch();

  return (
    <div className={style.header}>
      <div className={style.logo}>
        <div className={style.fiverr}>
         <img className='cursor-pointer' onClick={()=>navigate(`/`)} src="./../../../img/logo.png" alt="" />
        </div>
        <div className="auth p-4">
          <span className={style.span}>Become a Seller</span>
           {isAuth ? (
              <>
                <span className="navbar-text me-3">
                  Xin chào, {currentUser && currentUser.user.name}
                </span>
                <button
                  className="btn btn-danger"
                  onClick={handleLogout}
                >
                  Đăng xuất
                </button>
              </>
            ) : (
              <>
                <Link className="btn btn-primary me-2" to="/Signin">
                  Sign In
                </Link>
                <Link className="btn btn-primary" to="/signup">
                  Join
                </Link>
              </>
            )}
        </div>
      </div>

    </div>
  )
}


export default Header