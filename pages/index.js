import Link from "next/link";
import mographs from "../data/mographs";
import typography from "../data/typography";
import BannerBg from "../public/assets/BG.png";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div
        className={styles.homeBanner}
        style={{ backgroundImage: `url(${BannerBg})` }}
      >
        <h1 className={styles.title}>
          Uplevel Your
          <br />
          After Effects Skills
        </h1>
        <p>Sign up for weekly tips, tricks, and hacks!</p>
        <form className={styles.bannerForm}>
          <input type="text" placeholder="Enter Your Email" />
          <button type="submit">Expand Your AE Toolbox</button>
        </form>
      </div>

      <div className={styles.container}>
        <h2 className={styles.MainTitle}>Motion Graphics</h2>
        <p className={styles.MainSubTitle}>
          Spice up your designs with mographs!
        </p>
        <div className={styles.featureSection}>
          {mographs.map(({ id, title, src }) => (
            <div className={styles.feature} key={id}>
              <h3 className={styles.featureTitle}>{title}</h3>
              <div className={styles.featureVideo}>
                <video
                  width="100%"
                  height="100%"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={src} type="video/mp4" />
                </video>
              </div>
              <div className={styles.overlay} />
            </div>
          ))}
        </div>
        <div className={styles.btnContainer}>
          <Link className={styles.btnLink} href="/motion-graphics">
            View More Mographs
          </Link>
        </div>
      </div>

      <div className={styles.spaceSection}>
        <div className={styles.spaceVideo}>
          <video width="100%" height="100%" autoPlay loop muted>
            <source
              src={require("../public/assets/Space_Ball.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
        <h2>Enhance and Refine with AE B00ST</h2>
      </div>

      <div className={styles.container}>
        <h2 className={styles.MainTitle}>Typography</h2>
        <p className={styles.MainSubTitle}>Boost your type to take off!</p>
        <div className={styles.featureSection}>
          {typography.map(({ id, title, src }) => (
            <div className={styles.feature} key={id}>
              <h3 className={styles.featureTitle}>{title}</h3>
              <div className={styles.featureVideo}>
                <video width="100%" height="100%" autoPlay loop muted>
                  <source src={src} type="video/mp4" />
                </video>
              </div>
              <div className={styles.overlay} />
            </div>
          ))}
        </div>
        <div className={styles.btnContainer}>
          <Link className={styles.btnLink} href="/typography">
            View More Typography
          </Link>
        </div>
      </div>

      <div className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <h2>Enhance Your Graphics with AE B00ST</h2>
            <p>
              Sign up for weekly motion graphics & typography tips, tricks, and
              hacks!
            </p>
            <form className={styles.ctaForm}>
              <input type="text" placeholder="Enter Your Email" />
              <button type="submit">Expand Your AE Toolbox</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
