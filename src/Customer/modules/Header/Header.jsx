import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCareerAPI } from '../../apis/careerAPI'
import axiosClient from 'Customer/apis/axiosClient'
import { useDispatch,useSelector } from 'react-redux'
import {logout} from "./../../slice/UserSlice"
import { Link } from "react-router-dom";
import style from './header.module.scss'


function Header() {
  const [career, setCareer] = useState([]);
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.userReducer.user);
  const { isAuth } = useSelector((state) => state.userReducer);
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
  };
  const dispatch = useDispatch();
  const getCareer = async () => {
    try {
      const data = await getCareerAPI();
      setCareer(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCareer();
  }, {});


  return (
    <div className={style.header}>
      <div className={style.logo}>
        <div className={style.fiverr}>
          <img className='cursor-pointer' onClick={()=>{navigate(`/`)}} src="./img/logo.png" alt="" />
        </div>
        <div className="auth">
          <span className={style.span}>Become a Seller</span>
           {isAuth ? (
              <>
                <span className="navbar-text me-3 text-white">
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
      <div className={style.content}>
        <h2>Find the perfect freelance services for your bussiness</h2>
        <select onChange={e => navigate('/' + e.target.value)} name="" id="">
          {career.map((item) => {
            return (
              <option value={item.id}>{item.tenCongViec}</option>
            )
          })}
        </select>
        <h3 className='mt-3'>Popular: Website Design, WordPress, Logo Design, Dropshipping</h3>
      </div>


    </div>
  )
}


export default Header