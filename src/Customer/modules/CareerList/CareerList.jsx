import React from 'react'
import HeaderDetail from './Header/HeaderDetail'
import Menu from './Menu/Menu'
import CareerDetail from './CareerDetail/CareerDetail'
import { useParams } from 'react-router-dom'
import DetailFooter from './DetailFooter/DetailFooter'

function CareerList() {
    const { careerId } = useParams();
    return (
        <>
            <HeaderDetail />
            <Menu />
            <CareerDetail careerId={careerId} />
            <DetailFooter/>
            

        </>
    )
}

export default CareerList