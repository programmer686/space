import React from 'react'
import styles from "../styles/CrewCard.module.css"
function CrewCard(props) {
    function handleSwitch(name) {
        if (name === "COMMANDER") {
            props.state(0)
        }
        else if (name === "MISSION") {
            props.state(1)
        }
        else if (name === "PILOT") {
            props.state(2)
        }
        else if (name === "ENGINEER") {
            props.state(3)
        }
    }
  return (
    <div className={styles.container}>
        <div className={styles.infoCard}>
            <p className={styles.crew}><span className={styles.textGray}>02</span> MEET YOUR CREW</p>
            <h2 className={styles.title}>{props.title}</h2>
            <h1 className={styles.name}>{props.name}</h1>
            <p className={styles.bio}>{props.bio}</p>
            <div className={styles.btnContainer}>
                <button onClick={() => handleSwitch("COMMANDER")} className={styles.btns}></button>
                <button onClick={() => handleSwitch("MISSION")}  className={styles.btns}></button>
                <button onClick={() => handleSwitch("PILOT")}  className={styles.btns}></button>
                <button onClick={() => handleSwitch("ENGINEER")}  className={styles.btns}></button>
            </div>
        </div>
            <img 
            src={props.image}
            alt=""
            className={styles.photo}
            />
    </div>
  )
}

export default CrewCard