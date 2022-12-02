import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/logo.png";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navBar}>
          <div className={styles.logo}>
            <Link href="/">
              <Image src={Logo} alt="logo" width="40" height="40" />
              <h3>AE B00ST</h3>
            </Link>
          </div>
          <ul className={styles.navList}>
            <li>
              <Link href="/motion-graphics">Motion Graphics</Link>
            </li>
            <li>
              <Link href="/typography">Typography</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
