import React, { useState } from "react";
import styles from "../styles/Destination.module.css";
import travelData from "../public/data/travelData";
import DestinationCard from "../components/DestinationCard";

function Destination() {
  const [switching, setSwitching] = useState(0);
  const destinationCard = travelData.map((item) => {
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
    );
  });

  return (
    <div className={styles.body}>
      <div className={styles.moonCard}>{destinationCard[switching]}</div>
    </div>
  );
}

export default Destination;