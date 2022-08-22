import React from 'react'
import Image from "next/image"
import styles from "../styles/destinationCard.module.css"
function DestinationCard(props) {
  return (
    <div className={styles.body}>
        <div>
            <p className={styles.pick}>01 PICK YOUR DESTINATION</p>
            <img 
            className={styles.moons}
            src={props.imageSrc}
            alt=""
            />
        </div>
        <div className={styles.whereToBody}>       
            <h1 className={styles.location}>{props.destination}</h1>
            <p className={styles.tourInfo}>{props.tourInfo}</p>
            <div className={styles.divider}></div>
            <div className={styles.etaInfo}>
                <div>
                    <p className={styles.avgDistance}>AVG. DISTANCE</p>
                    <h1 className={styles.avgDistanceNum}>{props.distance}</h1>
                </div>
                <div>
                    <p className={styles.etaTime}>EST. TRAVEL TIME</p>
                    <h1 className={styles.etaTimeNum}>{props.travel}</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DestinationCard