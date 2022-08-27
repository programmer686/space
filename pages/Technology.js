import React, { useState } from "react";
import styles from "../styles/Technology.module.css";
import techData from "../public/data/techData";
import TechCard from "../components/TechCard";
function Technology() {
  const [switching, setSwitching] = useState(0);
  const techCard = techData.map((item) => {
    return (
      <TechCard
        key={item.key}
        id={item.id}
        name={item.name}
        description={item.description}
        image={item.image}
        state={setSwitching}
      />
    );
  });

  return <div className={styles.body}>{techCard[switching]}</div>;
}

export default Technology;