import React from 'react'
import {useParams} from 'react-router-dom'
import TypeWork from './TypeWork'
import DetailType from './DetailType'
function Type_Detail() {
    const typeWorkID=useParams()
  return (
    <div>
        <TypeWork typeWorkID={typeWorkID}/>
        <DetailType typeWorkID={typeWorkID}/>
    </div>
  )
}

export default Type_Detail