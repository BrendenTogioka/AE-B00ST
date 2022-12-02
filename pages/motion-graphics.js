import Link from "next/link";
import mographs from "../data/mographs";
import BannerBg from "../public/assets/BG.png";
import styles from "../styles/MotionGraphics.module.css";

export default function MotionGraphics() {
  return (
    <>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${BannerBg})` }}
      >
        <h1 className={styles.title}>After Effects Motion Graphics</h1>
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
                <video width="100%" height="100%" autoPlay loop muted>
                  <source src={src} type="video/mp4" />
                </video>
              </div>
              <div className={styles.overlay} />
            </div>
          ))}
        </div>
        {/* <div className={styles.btnContainer}>
          <button className={styles.btnLink} href="/motion-graphics">
            View More Mographs
          </button>
        </div> */}
      </div>

      <div className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaContent}>
            <h2>Enhance Your Graphics with AE B00ST</h2>
            <p>Sign up for weekly motion graphics tips, tricks, and hacks!</p>
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
