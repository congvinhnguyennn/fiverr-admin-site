import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../CareerList/Header/HeaderDetail'
import ListWork from './ListWork'
import Footer from '../Footer/Footer'
function ListMain() {
    const idCareer=useParams()
  return (
    <>
    <Header/>
    <ListWork idCareer={idCareer}/>
    <Footer/>
    </>
  )
}

export default ListMain