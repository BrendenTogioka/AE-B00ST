import { useState } from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assets/logo.png";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const router = useRouter();

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
          <button
            className={styles.hamburger}
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            {/* icon from heroicons.com */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={
              isNavExpanded
                ? `${styles.navigationMenu} ${styles.expanded}`
                : styles.navigationMenu
            }
          >
            <ul className={styles.navList}>
              <li
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <Link href="/motion-graphics">Motion Graphics</Link>
              </li>
              <li
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <Link href="/typography">Typography</Link>
              </li>
              <li
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <Link href="/about">About</Link>
              </li>
              <li
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
