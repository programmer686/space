import React from 'react'
import Image from "next/image"
import styles from "../styles/TechCard.module.css"
function TechCard(props) {
    function hanldeSwitch(id) {
        if (id === "LAUNCH") {
            props.state(0)
        }
        else if (id === "SPACEPORT") {
            props.state(1)
        }
        else if (id === "CAPSULE") {
            props.state(2)
        }
    }
  return (
    <div className={styles.techContainer}>
        <div className={styles.btnAndInfoContainer}>
        <div className={styles.btnContainer}>
            <button onClick={() => hanldeSwitch("LAUNCH")} className={styles.btns}>1</button>
            <button onClick={() => hanldeSwitch("SPACEPORT")} className={styles.btns}>2</button>
            <button onClick={() => hanldeSwitch("CAPSULE")} className={styles.btns}>3</button>
        </div>
        <div className={styles.infoBody}>
            <p className={styles.terminology}>THE TERMINOLOGY...</p>
            <h1 className={styles.name}>{props.name}</h1>
            <p className={styles.description}>{props.description}</p>
        </div>
        </div>
        <Image 
        className={styles.image}
        src={props.image}
        alt=""
        width=""
        height= "" />
    </div>
  )
}

export default TechCard