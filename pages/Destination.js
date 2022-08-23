import React, { useState } from 'react'
import styles from "../styles/Destination.module.css"
import travelData from "../public/data/travelData"
import DestinationCard from '../components/DestinationCard'



function Destination() {
  const [switching, setSwitching] = useState(0)
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
        state={setSwitching}
      />
    )
  })

  /*function handleShow(id) {
    if (id === "MOON") {
      setSwitching(0)
    } else if (id === "MARS") {
      setSwitching(1)
    } else if (id === "EUROPA") {
      setSwitching(2)
    } else if (id === "TITAN") {
      setSwitching(3)
    }
    
  }*/
  return (
    <div className={styles.body}>
      <div className={styles.moonCard}>
        {destinationCard[switching]} 
      </div>
       
    </div>
  )
}

export default Destination