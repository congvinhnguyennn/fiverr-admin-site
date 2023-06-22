import React from 'react'
import style from "./Footer.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFacebook,faTwitter } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <div className={style.footer}>
            <div className="row">
                <div className="col-2 m-4">
                    <h3>Categories</h3>
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
                    <h3>About</h3>
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
                    <h3>Support</h3>
                    <ul>
                        <li>Help and Support</li>
                        <li>Trust and Safety</li>
                        <li>Selling on Fiverr</li>
                        <li>Buying on Fiverr</li>
                    </ul>
                </div>
                <div className="col-2 m-3">
                    <h3>Community</h3>
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
                    <h3>More from Fiverr</h3>
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
                    <p>Fiverr Internaltion 2023</p>
                </div>
                <div className="socialLogo">
                </div>
            </div>
        </div>
    )
}

export default Footer