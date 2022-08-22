import React, { useState } from 'react'
import styles from "../styles/Destination.module.css"
import travelData from "../public/data/travelData"
import DestinationCard from '../components/DestinationCard'



function Destination() {
  const [show, setShow] = useState(true)
  const destinationCard = travelData.map(item => {
    return (
      <DestinationCard
        key={item.key}
        id={item.id}
        destination={item.destination}
        imageSrc={item.image}
        tourInfo={item.tourInfo}
        distance={item.distance}
        travel={item.travel}
      />
    )
  })

  function handleShow() {
    setShow(prev => !prev)
  }
  return (
    <div className={styles.body}>
      {destinationCard}  
    </div>
  )
}

export default Destination