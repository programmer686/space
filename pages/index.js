import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.body}>
        <div className={styles.bodyContainer}>
        <div className={styles.textContainer}>
        <p  className={styles.textHeader}>SO, YOU WANT TO TRAVEL TO</p>
        <p className={styles.textLogo}>SPACE</p>
        <p className={styles.textInfo}>
          Face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, relax because we will give you a 
          truly out of this world experience!
        </p>
      </div>
      <div>
        <button className={styles.btn}>Explore</button>
      </div>
        </div>
      
      
      </div>
      
    </div>
  )
}
