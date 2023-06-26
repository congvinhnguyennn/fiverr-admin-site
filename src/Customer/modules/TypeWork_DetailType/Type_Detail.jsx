import React from 'react'
import {useParams} from 'react-router-dom'
import TypeWork from './TypeWork'
import DetailType from './DetailType'
import Header from '../CareerList/Header/HeaderDetail'
import Footer from '../Footer/Footer'
function Type_Detail() {
    const typeWorkID=useParams()
    console.log(typeWorkID);
  return (
    <div>
       <Header/>
        <TypeWork typeWorkID={typeWorkID}/>
        <DetailType typeWorkID={typeWorkID}/>
        <Footer/>
    </div>
  )
}

export default Type_Detail