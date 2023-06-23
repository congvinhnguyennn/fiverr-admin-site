import React, { useState, useEffect } from 'react'
import { getCareerdetailAPI } from '../../API/careerAPI';
import style from "./CareerDetail.module.scss"

function CareerDetail({ careerId }) {
  const [career, setCareer] = useState({})

  const getCareerdetail = async () => {
    try {
      const data = await getCareerdetailAPI(careerId);
      setCareer(data.content);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCareerdetail();
  }, []);
  return (
    <div className={`${style.card} row`}>
      <div className={`${style.cardItem} card col-3`} style={{ width: '18rem' }}>
        <img src={career.hinhAnh} className={`${style.img} card-img-top`} alt="..." />
        <div className="card-body">
          <p className="card-title">{career.tenCongViec}</p>
          <p className="card-text">{career.moTa}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{`Vote:${career.saoCongViec}/10`}</li>
          <li className="list-group-item">{`Starting At:${career.giaTien}$`}</li>
        </ul>
      </div>
    </div>

  )
}

export default CareerDetail