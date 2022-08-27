import React, { useState } from "react";
import styles from "../styles/Crew.module.css";
import crewData from "../public/data/crewData";
import CrewCard from "../components/CrewCard";
function Crew() {
  const [switching, setSwitching] = useState(0);
  const crewCard = crewData.map((item) => {
    return (
      <CrewCard
        key={item.id}
        id={item.id}
        title={item.title}
        name={item.name}
        bio={item.bio}
        image={item.image}
        state={setSwitching}
      />
    );
  });
  console.log(CrewCard);
  return (
    <div className={styles.body}>
      <div className={styles.card}>{crewCard[switching]}</div>
    </div>
  );
}

export default Crew;
