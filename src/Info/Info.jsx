import React from 'react'
import style from './info.module.scss'

function Info() {
  return (
    <div className={`${style.info} row`}>
      <div className='col-6'>
        <div className="title">
          <h1>A Whole world of freelance</h1>
        </div>
        <div className="infoItem">
          <p>The best for every budget</p>
          <p>Find high-quality services at every price point. No hourly rates, just project-based pricing</p>
          <p>Quality work done quickly</p>
          <p>Find the right freelance to begin working on your project within minutes</p>
          <p>Protected payments, every time</p>
          <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work</p>
          <p>24/7 support</p>
          <p>Questions? Our round-the-lock support team is available to help anytime, anywhere</p>
        </div>
      </div>
      <div className={`col-6`} >
        <img className={style.infoImg} src="./img/people.jpg" alt="" />
      </div>
    </div>
  )
}

export default Info