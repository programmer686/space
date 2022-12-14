import React from "react";
import Image from "next/image";
import styles from "../styles/destinationCard.module.css";
function DestinationCard(props) {
  function handleShow(id) {
    if (id === "MOON") {
      props.state(0);
    } else if (id === "MARS") {
      props.state(1);
    } else if (id === "EUROPA") {
      props.state(2);
    } else if (id === "TITAN") {
      props.state(3);
    }
  }
  return (
    <div className={styles.body}>
      <div className={styles.moonWhereToContainer}>
        <p className={styles.pick}>
          <span className={styles.phase}>01</span> PICK YOUR DESTINATION
        </p>
        <div className={styles.imageConatiner}>
          <Image
            className={styles.moons}
            src={props.imageSrc}
            alt=""
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
      </div>

      <div className={styles.whereToBody}>
        <div className={styles.btnContainer}>
          <button className={styles.btns} onClick={() => handleShow("MOON")}>
            MOON
          </button>
          <button className={styles.btns} onClick={() => handleShow("MARS")}>
            MARS
          </button>
          <button className={styles.btns} onClick={() => handleShow("EUROPA")}>
            EUROPA
          </button>
          <button className={styles.btns} onClick={() => handleShow("TITAN")}>
            TITAN
          </button>
        </div>
        <h1 className={styles.location}>{props.destination}</h1>
        <p className={styles.tourInfo}>{props.tourInfo}</p>
        <div className={styles.divider}></div>
        <div className={styles.etaInfo}>
          <div className={styles.infoConatiners}>
            <p className={styles.avgDistance}>AVG. DISTANCE</p>
            <h1 className={styles.avgDistanceNum}>{props.distance}</h1>
          </div>
          <div className={styles.infoConatiners}>
            <p className={styles.etaTime}>EST. TRAVEL TIME</p>
            <h1 className={styles.etaTimeNum}>{props.travel}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;