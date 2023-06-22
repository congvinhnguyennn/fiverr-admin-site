import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faAddressCard, faSignature, faWallet, faFax, faCode, faBusinessTime, faSnowflake, faDatabase } from '@fortawesome/free-solid-svg-icons'
import style from "./Explore.module.scss"


function Explore() {
    return (
        <div className={style.explore}>
            <div className="exploreContent row">
                <div className='col-5'>
                    <img className={style.exploreImg } src="./img/meeting.jpg" alt="" />
                </div>
                <div className='col-7'>
                    <h3 className={style.title}>Kay Kim, Co-Fouder rooted</h3>
                    <p>It's extremely that Fiverr has freelancers from all over the world - it broadens the talent pool. One of the best thing about Fiverr is that while we're sleeping, someone's working</p>
                </div>
            </div>
            <div className="exploreItem">
                <h2>Explore the marketplace</h2>
                <div className="items row">
                    <div className="kill col-2 text-center">
                        <FontAwesomeIcon className={style.icon} icon={faPenToSquare} /> <br />
                        <span className={style.span}>Graphic and Design</span>
                    </div>
                    <div className="kill col-2 text-center">
                        <FontAwesomeIcon className={style.icon} icon={faAddressCard} /> <br />
                        <span className={style.span}>Digital Marketing</span>
                    </div>
                    <div className="kill col-2 text-center">
                        <FontAwesomeIcon className={style.icon} icon={faSignature} /> <br />
                        <span className={style.span}>Writing and Translation</span>
                    </div>
                    <div className="kill col-2 text-center">
                        <FontAwesomeIcon className={style.icon} icon={faWallet} /> <br />
                        <span className={style.span}>Video and Animation</span>
                    </div>
                    <div className="kill col-2 text-center">
                        <FontAwesomeIcon className={style.icon} icon={faFax} /> <br />
                        <span className={style.span}> Music and Radio</span>
                    </div>
                    <div className="kill col-2 text-center">
                        <FontAwesomeIcon className={style.icon} icon={faCode} /> <br />
                        <span className={style.span}>Programing and Tech</span>
                    </div>
                    <div className="kill col-2 text-center">
                        <FontAwesomeIcon className={style.icon} icon={faBusinessTime} /> <br />
                        <span className={style.span}>Business</span>
                    </div>
                    <div className="kill col-2 text-center">
                        <FontAwesomeIcon className={style.icon} icon={faSnowflake} /> <br />
                        <span className={style.span}>Life Style</span>
                    </div>
                    <div className="kill col-2 text-center">
                        <FontAwesomeIcon className={style.icon} icon={faDatabase} /> <br />
                        <span className={style.span}>Data</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Explore