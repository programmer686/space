import React, { useState } from "react";
import styles from "../styles/CrewCard.module.css";
import Image from "next/image";
function CrewCard(props) {
  const handleSwitch = (name) => {
    if (name === "COMMANDER") {
      props.state(0);
      console.log(btnStyled, btnStyle)
    } else if (name === "MISSION") {
      console.log(btnStyle)
      props.state(1);
    } else if (name === "PILOT") {
      props.state(2);
    } else if (name === "ENGINEER") {
      props.state(3);
    }
    
  }

  

 
  return (
    <div className={styles.container}>
      <div className={styles.infoCard}>
        <p className={styles.crew}>
          <span className={styles.textGray}>02</span> MEET YOUR CREW
        </p>
        <h2 className={styles.title}>{props.title}</h2>
        <h1 className={styles.name}>{props.name}</h1>
        <p className={styles.bio}>{props.bio}</p>
        <div className={styles.btnContainer}>
          <button
            onClick={() => handleSwitch("COMMANDER")}
            className={styles.btns}
          ></button>
          <button
            onClick={() => handleSwitch("MISSION")}
            className={styles.btns}
          ></button>
          <button
            onClick={() => handleSwitch("PILOT")}
            className={styles.btns}
          ></button>
          <button
            onClick={() => handleSwitch("ENGINEER")}
            className={styles.btns}
          ></button>
        </div>
      </div>
      <div className={styles.imageConatiner}>
        <Image
          className={styles.moons}
          src={props.image}
          alt=""
          width="100%"
          height="100%"
          layout="responsive"
        />
      </div>
    </div>
  );
}

export default CrewCard;