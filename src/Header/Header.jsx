import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCareerAPI } from '../API/careerAPI'
import axios from 'axios'
import style from './header.module.scss'


function Header() {
  const [career, setCareer] = useState([]);
  const navigate = useNavigate;

  const getCareer = async () => {
    try {
      const data = await getCareerAPI();
      console.log(data);
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
          <h3>fiverr</h3>
        </div>
        <div className="auth">
          Become a Seller
          <button className={style.button}>Sign In</button>
          <button>Join</button>
        </div>
      </div>
      <div className={style.content}>
        <h1>Find the perfect freelance services for your bussiness</h1>
        <select name="" id="">
          {career.map((item)=>{
            return (
              <option onChange={navigate(`/${item.id}`)} value={item.tenCongViec}>{item.tenCongViec}</option>
            )
          })}
        </select>
        
        <h3>Popular: Website Design, WordPress, Logo Design, Dropshipping</h3>
      </div>


    </div>
  )
}


export default Header