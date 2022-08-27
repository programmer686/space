import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../public/assets/shared/logo.svg";
import Image from "next/image";
import styles from "../styles/Header.module.css";
export default function Header() {
  const [width, setWidth] = useState(0);
  const [opener, setOpener] = useState(false);
  const screenSize = width >= 500;
  useEffect(() => {
    setWidth(window.innerWidth);
    screenSize ? setOpener(true) : setOpener(false);
  }, [width]);

  const navLongBarStyle = {
    display: opener ? "block" : "none",
  };

  const handleNavBar = () => {
    setOpener((prev) => !prev);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoAndBtn}>
        <Image src={Logo} alt="" className={styles.logo} />
        <button
          onClick={handleNavBar}
          className={styles.hamburderMenuContainer}
        >
          <div className={styles.hamburderBars}></div>
          <div className={styles.hamburderBars}></div>
          <div className={styles.hamburderBars}></div>
        </button>
      </div>
      <ul
        style={navLongBarStyle}
        id="linkContainer"
        className={styles.navLinkContainer}
      >
        <div className={styles.navLinksContainer}>
          <li>
            <Link href="/">
              <a className={styles.link}>00 Home</a>
            </Link>
          </li>
          <li>
            <Link href="/Destination">
              <a className={styles.link}>01 Destination</a>
            </Link>
          </li>
          <li>
            <Link href="/Crew">
              <a className={styles.link}>02 Crew</a>
            </Link>
          </li>
          <li>
            <Link href="/Technology">
              <a className={styles.link}>03 Technology</a>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
