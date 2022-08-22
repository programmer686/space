import Link from "next/link"
import Logo from "../public/assets/shared/logo.svg"
import Image from "next/image"
import styles from "../styles/Header.module.css"
export default function Header() {
    return (
        <nav className={styles.navbar}>
            <Image
            src={Logo}
            alt=""
            className={styles.logo}
             />
            <ul className={styles.navLinkContainer}>
                <li>
                    <Link className={styles.linkRoutes} href="/">
                        <a className={styles.link}>00 Home</a>
                    </Link>
                </li>
                <li>
                    <Link className={styles.linkRoutes}  href="/Destination">
                        <a className={styles.link}>01 Destination</a>
                    </Link>
                </li>
                <li>
                    <Link className={styles.linkRoutes}  href="/Crew">
                        <a className={styles.link}>02 Crew</a>
                    </Link>
                </li>
                <li>
                    <Link className={styles.linkRoutes}  href="/Technology">
                        <a className={styles.link}>03 Technology</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}