import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../CareerList/Header/HeaderDetail'
import DetailWork from './DetailWork'
import Footer from '../Footer/Footer'
import Menu from '../CareerList/Menu/Menu'

function DetailMain() {
    const careerId=useParams()
  return (
    <>
    <Header/>
    <Menu/>
    <DetailWork careerId={careerId}/>
    <Footer/>
    </>
  )
}

export default DetailMain