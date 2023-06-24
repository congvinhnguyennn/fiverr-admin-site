import React from 'react'
import style from "./Header.module.scss"

function Header() {
  

  return (
    <div className={style.header}>
      <div className={style.logo}>
        <div className={style.fiverr}>
          <h3 className={style.fiverr}>fiverr</h3>
        </div>
        <div className="auth">
          <span className={style.span}>Become a Seller</span>
          <button className={style.sigIn}>Sign In</button>
          <button className={style.join}>Join</button>
        </div>
      </div>

    </div>
  )
}


export default Header