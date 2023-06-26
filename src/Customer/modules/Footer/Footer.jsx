import React,{useState,useEffect} from 'react'
import style from "./Footer.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook,faTwitter } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const desk=()=>{
    return(
        <div>
             <div className="row">
                <div className="col-2 m-4">
                    <h3 className={style.title}>Categories</h3>
                    <ul>
                        <li>Graphic and Design</li>
                        <li>Digital Marketing</li>
                        <li>Writing and Translation</li>
                        <li>Video and Animation</li>
                        <li>Music and Audio</li>
                        <li>Programing and Tech</li>
                        <li>Data</li>
                        <li>Business</li>
                        <li>Lifestyle</li>
                        <li>SiteMap</li>
                    </ul>
                </div>
                <div className="col-2 m-4">
                    <h3 className={style.title}>About</h3>
                    <ul>
                        <li>Career</li>
                        <li>Press and News</li>
                        <li>PartnerShip</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Service</li>
                        <li>Intellectual Property Chaims</li>
                        <li>Investor Relation</li>
                    </ul>
                </div>
                <div className="col-2 m-4">
                    <h3 className={style.title}>Support</h3>
                    <ul>
                        <li>Help and Support</li>
                        <li>Trust and Safety</li>
                        <li>Selling on Fiverr</li>
                        <li>Buying on Fiverr</li>
                    </ul>
                </div>
                <div className="col-2 m-3">
                    <h3 className={style.title}>Community</h3>
                    <ul>
                        <li>Events</li>
                        <li>Blog</li>
                        <li>Forum</li>
                        <li>Community Standard</li>
                        <li>Padcast</li>
                        <li>Affiliates</li>
                        <li>Invite a Friend</li>
                        <li>Become a Seller</li>
                        <li>Fiverr Elavate</li>
                    </ul>
                </div>
                <div className="col-2 m-4">
                    <h3 className={style.title}>More from Fiverr</h3>
                    <ul>
                        <li>Fiverr Business</li>
                        <li>Fiverr Pro</li>
                        <li>Fiverr Studio</li>
                        <li>Fiverr logo Maker</li>
                        <li>Fiverr Guilde</li>
                        <li>Get InSprised</li>
                        <li>Clear Voice</li>
                        <li>And CO</li>
                        <li>Lifestyle</li>
                        <li>Learn</li>
                    </ul>
                </div>
            </div>
            <div className="social">
                <div className="socialFiverr">
                    <p className={style.logo}> Fiverr Internaltion 2023</p>
                </div>
                <div className="socialLogo">
                </div>
            </div>
        </div>
    )
  }
  const tab=()=>{
    return (
         <div>
             <div className="d-flex flex-column">
                <div className="">
                    <h3 className={style.title}>Categories</h3>
                    <ul>
                        <li>Graphic and Design</li>
                        <li>Digital Marketing</li>
                        <li>Writing and Translation</li>
                        <li>Video and Animation</li>
                        <li>Music and Audio</li>
                        <li>Programing and Tech</li>
                        <li>Data</li>
                        <li>Business</li>
                        <li>Lifestyle</li>
                        <li>SiteMap</li>
                    </ul>
                </div>
                <div className="">
                    <h3 className={style.title}>About</h3>
                    <ul>
                        <li>Career</li>
                        <li>Press and News</li>
                        <li>PartnerShip</li>
                        <li>Privacy Policy</li>
                        <li>Terms and Service</li>
                        <li>Intellectual Property Chaims</li>
                        <li>Investor Relation</li>
                    </ul>
                </div>
                <div className="">
                    <h3 className={style.title}>Support</h3>
                    <ul>
                        <li>Help and Support</li>
                        <li>Trust and Safety</li>
                        <li>Selling on Fiverr</li>
                        <li>Buying on Fiverr</li>
                    </ul>
                </div>
                <div className="">
                    <h3 className={style.title}>Community</h3>
                    <ul>
                        <li>Events</li>
                        <li>Blog</li>
                        <li>Forum</li>
                        <li>Community Standard</li>
                        <li>Padcast</li>
                        <li>Affiliates</li>
                        <li>Invite a Friend</li>
                        <li>Become a Seller</li>
                        <li>Fiverr Elavate</li>
                    </ul>
                </div>
                <div className="">
                    <h3 className={style.title}>More from Fiverr</h3>
                    <ul>
                        <li>Fiverr Business</li>
                        <li>Fiverr Pro</li>
                        <li>Fiverr Studio</li>
                        <li>Fiverr logo Maker</li>
                        <li>Fiverr Guilde</li>
                        <li>Get InSprised</li>
                        <li>Clear Voice</li>
                        <li>And CO</li>
                        <li>Lifestyle</li>
                        <li>Learn</li>
                    </ul>
                </div>
            </div>
            <div className="social">
                <div className="socialFiverr">
                    <p className={style.logo}> Fiverr Internaltion 2023</p>
                </div>
                <div className="socialLogo">
                </div>
            </div>
        </div>
    )
  }
    return (
        <div className={style.footer}>
           {windowSize.width >768 && (desk())}
           {windowSize.width <=768 && (tab())}
        </div>
    )
}

export default Footer