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
                    Kay Kim, Co-Fouder rooted
                    <p>It's extremely that Fiverr has freelancers from all over the world - it broadens the talent pool. One of the best thing about Fiverr is that while we're sleeping, someone's working</p>
                </div>
            </div>
            <div className="exploreItem">
                <h2>Explore the marketplace</h2>
                <div className="items row">
                    <div className="kill col-2 text-center">
                        <FontAwesomeIcon icon={faPenToSquare} /> <br />
                        <span>Graphic and Design</span>
                    </div>
                    <div className="kill col-2 text-center">
                        <FontAwesomeIcon icon={faAddressCard} /> <br />
                        <span>Digital Marketing</span>
                    </div>
                    <div className="kill col-2 text-center">
                        <FontAwesomeIcon icon={faSignature} /> <br />
                        <span>Writing and Translation</span>
                    </div>
                    <div className="kill col-2 text-center">
                        <FontAwesomeIcon icon={faWallet} /> <br />
                        <span>Video and Animation</span>
                    </div>
                    <div className="kill col-2 text-center">
                        <FontAwesomeIcon icon={faFax} /> <br />
                        <span>Music and Radio</span>
                    </div>
                    <div className="kill col-2 text-center">
                        <FontAwesomeIcon icon={faCode} /> <br />
                        <span>Programing and Tech</span>
                    </div>
                    <div className="kill col-2 text-center">
                        <FontAwesomeIcon icon={faBusinessTime} /> <br />
                        <span>Business</span>
                    </div>
                    <div className="kill col-2 text-center">
                        <FontAwesomeIcon icon={faSnowflake} /> <br />
                        <span>Life Style</span>
                    </div>
                    <div className="kill col-2 text-center">
                        <FontAwesomeIcon icon={faDatabase} /> <br />
                        <span>Data</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Explore